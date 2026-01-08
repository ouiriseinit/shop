// src/app/api/contact/send/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase' // Use the @ alias to point to src/lib

export async function GET(request: Request) {
  try {

    // 2. Insert into Supabase
    const { data, error } = await supabase
      .from('todos')
      .select('')
    

    if (error) {
      console.error('Supabase Error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    console.log(data)

    // 3. Respond to the frontend
    return NextResponse.json(data, { status: 200 })

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { id, user_id, complete, title, content } = body

    // 1. Console log (Visible in your VS Code terminal)
    console.log('--- SYSTEM_UPLINK_RECEIVED ---')
    console.log('Todo:', title)
    console.log('Content:', content)
    console.log('Complete:', complete)


    // 3. Insert into Supabase
    const { data, error } = await supabase
      .from('todos')
      .insert([
        { 
          id, user_id, complete, title, content
        }
      ])
      .select()

    if (error) {
      console.error('Supabase Error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // 4. Respond to the frontend
    return NextResponse.json({ 
      success: true, 
    }, { status: 200 })

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}