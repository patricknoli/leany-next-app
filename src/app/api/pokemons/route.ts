import axios from "axios";

export const dynamic = 'force-static'

export async function GET() {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=51');
  const data = await res.data

  return Response.json({ data })
}