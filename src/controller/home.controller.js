/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const homeGet = (req, res) => {
  res.render('page/home')
}
