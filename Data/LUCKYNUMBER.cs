using System.ComponentModel.DataAnnotations;

namespace NestleWebApp.Data
{
    public class LUCKYNUMBER
    {
      
        public int ID { get; set; }
        public int NUMB { get; set; }
        public string? CONTENTS { get; set; }
        public string? IMAGE { get; set; }
        public bool STATUS { get; set; }
        public string? NOTE { get; set; }
    }
}
