using BL.Api;
using BL.Services;
using Dal;
using Dal.API;
using Dal.Services;
using Microsoft.Extensions.DependencyInjection;
using RehubCenterServer.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class BlManager : IBlManager
    {
        public IBlPatient Patient { get; }
        public BlManager()
        {

            ServiceCollection services = new ServiceCollection();

            services.AddSingleton<IDal, DalManager>();
            services.AddSingleton<IBlPatient, PatientBlServices>();
            ServiceProvider serviceProvider = services.BuildServiceProvider();
            Patient = serviceProvider.GetService<IBlPatient>();

        }
    }
}
