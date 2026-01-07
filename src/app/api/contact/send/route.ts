// src/app/api/contact/send/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase' // Use the @ alias to point to src/lib

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, organization } = body

    // 1. Console log (Visible in your VS Code terminal)
    console.log('--- SYSTEM_UPLINK_RECEIVED ---')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', phone)
    console.log('Organization:', organization)

    // 2. Insert into Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        { 
            name, email, phone
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