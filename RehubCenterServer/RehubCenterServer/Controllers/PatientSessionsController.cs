using BL.Api;
using Dal.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RehubCenterServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientSessionsController : ControllerBase
    {
        private readonly IBlPatientSessions _patientSessionsService; // עדכון לשירות ה-BL

        public PatientSessionsController(IBlPatientSessions patientSessionsService) // קבל את השירות דרך ה-Constructor
        {
            _patientSessionsService = patientSessionsService;
        }

        // הצגת כל התורים של פציינט לפי ה-ID שלו
        [HttpGet("byPatient/{patientId}")]
        public ActionResult<IEnumerable<PatientSession>> GetSessionsByPatientId(string patientId)
        {
            var patientSessions = _patientSessionsService.GetSessionsByPatientId(patientId);
            if (!patientSessions.Any())
                return NotFound();
            return Ok(patientSessions);
        }
    }
}
