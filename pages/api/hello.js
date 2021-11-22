// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function helloHandler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// // TODO: add a GET route for /api/v1/templates/:id
// export function getTemplateHandler(id) {
//   return request
//     .get(`${process.env.API_URL}/templates/${id}`)
//     .then(res => res.body)
// }

// // TODO: add a POST route for /api/v1/templates
// export function postTemplateHandler(template) {
//   return request
//     .post(`${process.env.API_URL}/templates`)
//     .send(template)
//     .then(res => res.body)
// }
