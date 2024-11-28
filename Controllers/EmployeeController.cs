using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NestleWebApp.Data;
using NestleWebApp.Models;

namespace NestleWebApp.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly AppDbContext _appDbContext;
        //private readonly ICloudStorageService _cloudStorageService;

        public EmployeeController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
            //_cloudStorageService = cloudStorageService;

        }
        // GET: Employee
        public ActionResult Index()
        {
            return View(_appDbContext.EMPLOYEE.ToList());
        }

        // GET: Employee/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Employee/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Employee/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(EMPLOYEE emp)
        {
            try
            {
                // TODO: Add insert logic here
                _appDbContext.EMPLOYEE.Add(emp);
                _appDbContext.SaveChanges();
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Employee/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Employee/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Employee/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Employee/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
