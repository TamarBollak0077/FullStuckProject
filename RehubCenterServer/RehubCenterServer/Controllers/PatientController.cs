//using BL.Api; // הוסף את השימוש בשירות ה-BL
//using BL.Models;
//using Microsoft.AspNetCore.Mvc;
//using RehubCenterServer.models;

//namespace RehubCenterServer.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class PatientController : ControllerBase
//    {
//        private readonly IBlPatient _patientService; // עדכון לשירות ה-BL

//        public PatientController(IBlPatient patientService) // קבל את השירות דרך ה-Constructor
//        {
//            _patientService = patientService;
//        }


//        //create
//        [HttpPost]
//        public ActionResult<Patient> Add([FromBody] Patient newPatient)
//        {
//            if (newPatient == null || string.IsNullOrEmpty(newPatient.FirstName) || string.IsNullOrEmpty(newPatient.LastName))
//            {
//                return BadRequest("First name and last name are required.");
//            }

//            // הוספת המטופל לשירות ה-BL
//            _patientService.Create(newPatient);

//            // החזרת המטופל שנוסף עם קוד סטטוס 201 Created
//            return CreatedAtAction(nameof(Add), newPatient);
//        }


//        //get
//        [HttpGet]
//        public ActionResult<IEnumerable<Patient>> GetPatientsDetails()
//        {
//            // החזרת הנתונים דרך שירות ה-BL
//            var patients = _patientService.Read();
//            return Ok(patients);
//        }

//        [HttpGet]
//        [Route("contactInfo")]
//        public ActionResult<IEnumerable<string>> GetPatientsContactInfo()
//        {
//            // החזרת הנתונים דרך שירות ה-BL
//            var patients = _patientService.GetContactInfo();
//            return Ok(patients);
//        }


//        //delete
//        [HttpDelete("{id}")]
//        public IActionResult Delete(int id)
//        {
//            _patientService.Delete(id);
//            return Ok("Patient deleted successfully.");
//        }

//        //update contact info
//        [HttpPut("update-contact-info/{patientId}")]
//        public IActionResult UpdateContactInfo(int patientId, [FromBody] ContactInfoUpdate contactInfoUpdate)
//        {
//            if (contactInfoUpdate == null || string.IsNullOrEmpty(contactInfoUpdate.NewContactInfo))
//            {
//                return BadRequest("New contact info is required.");
//            }

//            try
//            {
//                _patientService.UpdateContactInfo(patientId, contactInfoUpdate.NewContactInfo);
//                return Ok("Contact info updated successfully.");
//            }
//            catch (InvalidOperationException ex)
//            {
//                return NotFound(ex.Message);
//            }
//        }

//    }
//}
