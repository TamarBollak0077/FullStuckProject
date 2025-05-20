namespace RehubCenterServer.Models
{
    public class PatientLoginRequest
    {
        public int PatientId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}