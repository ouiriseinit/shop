// src/app/api/contact/send/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase' // Use the @ alias to point to src/lib

export async function GET(request: Request) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('')
    

    if (error) {
      console.error('Supabase Error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(data, { status: 200 })

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { id, name, short_description, description, price, sizes, colors, images } = body

    // 1. Log Data
    console.log('--- SYSTEM_UPLINK_RECEIVED ---')
    console.log('Name:', name)

    // 2. Insert into Supabase
    if (!id) {
      const { data, error } = await supabase
        .from('products')
        .insert([
          { 
              name, short_description, description, price, sizes, colors, images
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
    }

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}