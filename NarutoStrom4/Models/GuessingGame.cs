using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NarutoStrom4.Models
{
    public class GuessingGame
    {
        [Display(Name = "Enter your name")]
        [Required(ErrorMessage = "You must enter your name")]
        [MinLength(1, ErrorMessage = "Name is too short")]
        [MaxLength(100, ErrorMessage = "Name is too long")]
        public string PlayerName { get; set; }

        [Display(Name = "What is your guess?")]
        [Required(ErrorMessage = "You must enter your guess")]
        [Range(1, 100, ErrorMessage = "Guess must be between 1 and 100")]
        public int Guess { get; set; }

        public bool IsWin { get; set; }

        public string GuessWasCorrect(int answer)
        {

            // guess == (int)HttpContext.Session.GetInt32("Answer");
            if (Guess < answer)
            {
                return "för lågt";
            }
            else if(Guess > answer)
            {
                return "för högt";
            }
            this.IsWin = true;
            return $"Grattis Du Vinner, {this.PlayerName}! Din gissa är rätt {answer}!";

        }

    }
}
