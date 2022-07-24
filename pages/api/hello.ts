// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function helloHandler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// TODO: tRPC for funzies?
