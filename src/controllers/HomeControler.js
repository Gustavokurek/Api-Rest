class HomeController {
  index(req, res) {
    res.json({
      'hakuna  matata': 'rei leão',
    });
  }
}

export default new HomeController();
