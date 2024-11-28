using Microsoft.AspNetCore.Mvc;
using NestleWebApp.Models;
using System.Diagnostics;

namespace NestleWebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _appDbContext;
        //private readonly ICloudStorageService _cloudStorageService;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, AppDbContext appDbContext)
        {
            _logger = logger;
            _appDbContext = appDbContext;

        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult testingdataemployee()
        {
            return View(_appDbContext.EMPLOYEE.ToList());
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
