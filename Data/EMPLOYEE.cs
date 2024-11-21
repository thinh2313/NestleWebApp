using System.ComponentModel.DataAnnotations;

namespace NestleWebApp.Data
{
    public class EMPLOYEE
    {
        public int ID { get; set; }
        public string? IDCODE {  get; set; }
        public string? NAME { get; set; }
        public string?BU { get; set; }
        public int? TIMEDRAW { get; set; }
        public string? RESULT { get; set; }
        public string? GIFT { get; set; }

    }
}
