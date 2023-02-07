using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test1.Models;

namespace Test1.Controllers
{
    public class blahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Grade()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Grade(GradeModel model)
        {
            return View();
        }

    }
}
