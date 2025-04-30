using Dal.API;

public class DalManager : IDal
{
    public IPatient Patient { get; }
    public ITherapist Therapist { get; }

    public DalManager(IPatient patientService, ITherapist therapistService)
    {
        Patient = patientService;
        Therapist = therapistService;
    }
}
