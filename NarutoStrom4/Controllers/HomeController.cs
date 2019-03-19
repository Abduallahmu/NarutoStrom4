using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NarutoStrom4.Models;

namespace NarutoStrom4.Properties.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Projects()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();

        }

        [HttpGet]
        public IActionResult FeverCheck()
        {
            return View();
        }

        [HttpPost]
        public IActionResult FeverCheck(string feverCheck)
        {
            double newtetemperature = 0;

            feverCheck = feverCheck.Replace('.', ',');

            double.TryParse(feverCheck, out newtetemperature);

            ViewBag.DoctorSays = CheckTemp.FeverCheck(newtetemperature);

            return View();
        }
    }
}