using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace WebApplication.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Movies()
        {
            return View();
        }
        
        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }
         public IActionResult DirectivesView()
        {
            ViewData["Value"] = 4;

            return View();
        }
        
       public IActionResult Databinding()
        {
            ViewData["Value"] = "Diogenes";

            return View();
        }
            
        public IActionResult Templates()
        {
            ViewData["Value"] = "Diogenes";

            return View();
        }
        
        public IActionResult Expressions()
        {
            ViewData["Value"] = "Diogenes";

            return View();
        }
        public IActionResult Repeaters()
        {
            ViewData["Value"] = "Diogenes";

            return View();
        }
        
        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View("~/Views/Shared/Error.cshtml");
        }
    }
}
