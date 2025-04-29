using RehubCenterServer.models;
using Microsoft.AspNetCore.Mvc;
using BL.Api; // הוסף את השימוש בשירות ה-BL

namespace RehubCenterServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly IBlPatient _patientService; // עדכון לשירות ה-BL

        public PatientController(IBlPatient patientService) // קבל את השירות דרך ה-Constructor
        {
            _patientService = patientService;
        }


        //create
        [HttpPost]
        public ActionResult<Patient> Add([FromBody] Patient newPatient)
        {
            if (newPatient == null || string.IsNullOrEmpty(newPatient.FirstName) || string.IsNullOrEmpty(newPatient.LastName))
            {
                return BadRequest("First name and last name are required.");
            }

            // הוספת המטופל לשירות ה-BL
            _patientService.Create(newPatient);

            // החזרת המטופל שנוסף עם קוד סטטוס 201 Created
            return CreatedAtAction(nameof(Add), newPatient);
        }


        //get
        [HttpGet]
        public ActionResult<IEnumerable<Patient>> GetPatientsDetails()
        {
            // החזרת הנתונים דרך שירות ה-BL
            var patients = _patientService.Read();
            return Ok(patients);
        }

        [HttpGet]
        [Route("contactInfo")]
        public ActionResult<IEnumerable<string>> GetPatientsContactInfo()
        {
            // החזרת הנתונים דרך שירות ה-BL
            var patients = _patientService.GetContactInfo();
            return Ok(patients);
        }


        //delete
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _patientService.Delete(id);
            return NoContent(); 
        }

    }
}
