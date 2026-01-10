// src/app/api/contact/send/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase' // Use the @ alias to point to src/lib

export const dynamic = "force-dynamic"; // Prevents pre-rendering at build time

export async function GET(request: Request) {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('')
    

    if (error) {
      console.error('Supabase Error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    console.log(data)

    return NextResponse.json(data, { status: 200 })

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name } = body

    // 1. Log Data
    console.log('--- SYSTEM_UPLINK_RECEIVED ---')
    console.log('Name:', name)

    // 2. Insert into Supabase
    const { data, error } = await supabase
      .from('categories')
      .insert([
        { 
            name
        }
      ])
      .select()

    if (error) {
      console.error('Supabase Error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // 3. Respond to the frontend
    return NextResponse.json({ 
      success: true, 
      received: data 
    }, { status: 200 })

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}