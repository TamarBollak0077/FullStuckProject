using Dal.Entities;
using Dal.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BL.Api;

namespace RehubCenterServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TherapistController : ControllerBase
    {

        private readonly IBlTherapist _therapistService; // עדכון לשירות ה-BL

        public TherapistController(IBlTherapist therapistService) // קבל את השירות דרך ה-Constructor
        {
            _therapistService = therapistService;
        }

        //get
        [HttpGet]
        public ActionResult<IEnumerable<Patient>> GetPatientsDetails()
        {
            // החזרת הנתונים דרך שירות ה-BL
            var patients = _therapistService.Read();
            return Ok(patients);
        }
    }
}
