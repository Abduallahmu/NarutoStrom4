using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NarutoStrom4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
namespace NarutoStrom4.Controllers
{
    public class GameController : Controller
    {
        private Random rand;

        public GameController()
        {
            rand = new Random();
        }
        public ActionResult Index()
        {
            HttpContext.Session.SetInt32("Answer", rand.Next(1, 100));

            return View(new GuessingGame());
        }

        [HttpPost]
        public ActionResult Index(GuessingGame model)
        {
            if (ModelState.IsValid)
            {
                ViewBag.message = model.GuessWasCorrect((int)HttpContext.Session.GetInt32("Answer"));
            }


            return View(model);
        }
    }
}
