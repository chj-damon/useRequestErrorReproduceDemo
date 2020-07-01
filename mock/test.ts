export default {
  '/test': (req, res) => {
    res.status(500).send({
      success: false,
      message: 'error',
      code: 50000,
    })
  }
}
