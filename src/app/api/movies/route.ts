import movies from '@/data/movies';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    console.log('API movies data:', movies); // Debug log
    if (!movies || !Array.isArray(movies)) {
      throw new Error('Invalid movies data');
    }
    return new NextResponse(JSON.stringify(movies), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch movies' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
