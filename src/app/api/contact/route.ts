import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase' // Use the @ alias to point to src/lib

export async function GET(request: Request) {
  try {
    const { data, error } = await supabase
      .from('contacts')
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