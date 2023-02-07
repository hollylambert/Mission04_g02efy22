using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Test1.Models
{
    public class GradeModel
    {
        [Required]
        [Range(0, 50, ErrorMessage = "Enter number between 0 to 50")]
        public int A { get; set; }

        [Required]
        [Range(0, 10, ErrorMessage = "Enter number between 0 to 10")]
        public int GP { get; set; }

        [Required]
        [Range(0, 10, ErrorMessage = "Enter number between 0 to 10")]
        public int Q { get; set; }

        [Required]
        [Range(0, 10, ErrorMessage = "Enter number between 0 to 10")]
        public int ME { get; set; }

        [Required]
        [Range(0, 10, ErrorMessage = "Enter number between 0 to 10")]
        public int F { get; set; }

        [Required]
        [Range(0, 10, ErrorMessage = "Enter number between 0 to 10")]
        public int I { get; set; }
    }
}
