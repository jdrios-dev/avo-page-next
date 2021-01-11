import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
import { request } from 'http'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()

  const id = req.query.id

  const entry = await db.getById(id as string)

  res.status(200).json(entry)

  // res.statusCode = 200;
  // res.setHeader( 'Content-type', 'application/json' );
  // res.end(JSON.stringify({ data: entry }));
}

export default allAvos
