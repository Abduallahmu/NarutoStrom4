using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NarutoStrom4.Models
{
    public class CheckTemp
    {
        public static string FeverCheck(double value)
        {
            if (value < 15)
            {
                return "You are frozen";
            }
            else if (value <= 30 && value >= 15)
            {
                return "You are not normal Maybe you will die soon";
            }
            else if (value <= 36.5 )
            {
                return "You are fine, I wish you health";
            }
            else if (value <= 37.5)
            {
                return "You are fine, I wish you health";
            }

            else if (value <= 50)
            {
                return "You are burn and you will become ashes";
            }
            else if (value > 50)
            {
                return "You are now in hell";
            }

            return "Did not go right. Error";
        }
    }
}
