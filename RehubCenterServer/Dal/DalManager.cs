using Dal.API;

public class DalManager : IDal
{
    public IPatient Patient { get; }
    public ITherapist Therapist { get; }


    public IPatientSessions PatientSessions { get; }

public DalManager(IPatient patientService, ITherapist therapistService, IPatientSessions patientSessionsService)
    {
        Patient = patientService;
        Therapist = therapistService;
        PatientSessions = patientSessionsService;

    }
}
