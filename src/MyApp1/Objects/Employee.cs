﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.MyApp1
{
    using ICSSoft.STORMNET;


    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Employee.
    /// </summary>
    // *** Start programmer edit section *** (Employee CustomAttributes)

    // *** End programmer edit section *** (Employee CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("EmployeeE", new string[] {
            "FirstName as \'First name\'",
            "LastName as \'Last name\'",
            "Patronymic as \'Patronymic\'",
            "BirthDate as \'Birth date\'"})]
    [View("EmployeeL", new string[] {
            "FirstName as \'First name\'",
            "LastName as \'Last name\'",
            "Patronymic as \'Patronymic\'",
            "BirthDate as \'Birth date\'"})]
    public class Employee : ICSSoft.STORMNET.DataObject
    {

        private System.DateTime fBirthDate;

        private string fFirstName;

        private string fLastName;

        private string fPatronymic;

        private IIS.MyApp1.Room fRoom;

        // *** Start programmer edit section *** (Employee CustomMembers)

        // *** End programmer edit section *** (Employee CustomMembers)


        /// <summary>
        /// BirthDate.
        /// </summary>
        // *** Start programmer edit section *** (Employee.BirthDate CustomAttributes)

        // *** End programmer edit section *** (Employee.BirthDate CustomAttributes)
        public virtual System.DateTime BirthDate
        {
            get
            {
                // *** Start programmer edit section *** (Employee.BirthDate Get start)

                // *** End programmer edit section *** (Employee.BirthDate Get start)
                System.DateTime result = this.fBirthDate;
                // *** Start programmer edit section *** (Employee.BirthDate Get end)

                // *** End programmer edit section *** (Employee.BirthDate Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Employee.BirthDate Set start)

                // *** End programmer edit section *** (Employee.BirthDate Set start)
                this.fBirthDate = value;
                // *** Start programmer edit section *** (Employee.BirthDate Set end)

                // *** End programmer edit section *** (Employee.BirthDate Set end)
            }
        }

        /// <summary>
        /// FirstName.
        /// </summary>
        // *** Start programmer edit section *** (Employee.FirstName CustomAttributes)

        // *** End programmer edit section *** (Employee.FirstName CustomAttributes)
        [StrLen(255)]
        public virtual string FirstName
        {
            get
            {
                // *** Start programmer edit section *** (Employee.FirstName Get start)

                // *** End programmer edit section *** (Employee.FirstName Get start)
                string result = this.fFirstName;
                // *** Start programmer edit section *** (Employee.FirstName Get end)

                // *** End programmer edit section *** (Employee.FirstName Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Employee.FirstName Set start)

                // *** End programmer edit section *** (Employee.FirstName Set start)
                this.fFirstName = value;
                // *** Start programmer edit section *** (Employee.FirstName Set end)

                // *** End programmer edit section *** (Employee.FirstName Set end)
            }
        }

        /// <summary>
        /// LastName.
        /// </summary>
        // *** Start programmer edit section *** (Employee.LastName CustomAttributes)

        // *** End programmer edit section *** (Employee.LastName CustomAttributes)
        [StrLen(255)]
        public virtual string LastName
        {
            get
            {
                // *** Start programmer edit section *** (Employee.LastName Get start)

                // *** End programmer edit section *** (Employee.LastName Get start)
                string result = this.fLastName;
                // *** Start programmer edit section *** (Employee.LastName Get end)

                // *** End programmer edit section *** (Employee.LastName Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Employee.LastName Set start)

                // *** End programmer edit section *** (Employee.LastName Set start)
                this.fLastName = value;
                // *** Start programmer edit section *** (Employee.LastName Set end)

                // *** End programmer edit section *** (Employee.LastName Set end)
            }
        }

        /// <summary>
        /// Patronymic.
        /// </summary>
        // *** Start programmer edit section *** (Employee.Patronymic CustomAttributes)

        // *** End programmer edit section *** (Employee.Patronymic CustomAttributes)
        [StrLen(255)]
        public virtual string Patronymic
        {
            get
            {
                // *** Start programmer edit section *** (Employee.Patronymic Get start)

                // *** End programmer edit section *** (Employee.Patronymic Get start)
                string result = this.fPatronymic;
                // *** Start programmer edit section *** (Employee.Patronymic Get end)

                // *** End programmer edit section *** (Employee.Patronymic Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Employee.Patronymic Set start)

                // *** End programmer edit section *** (Employee.Patronymic Set start)
                this.fPatronymic = value;
                // *** Start programmer edit section *** (Employee.Patronymic Set end)

                // *** End programmer edit section *** (Employee.Patronymic Set end)
            }
        }

        /// <summary>
        /// Employee.
        /// </summary>
        // *** Start programmer edit section *** (Employee.Room CustomAttributes)

        // *** End programmer edit section *** (Employee.Room CustomAttributes)
        [PropertyStorage(new string[] {
                "Room"})]
        [NotNull()]
        public virtual IIS.MyApp1.Room Room
        {
            get
            {
                // *** Start programmer edit section *** (Employee.Room Get start)

                // *** End programmer edit section *** (Employee.Room Get start)
                IIS.MyApp1.Room result = this.fRoom;
                // *** Start programmer edit section *** (Employee.Room Get end)

                // *** End programmer edit section *** (Employee.Room Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Employee.Room Set start)

                // *** End programmer edit section *** (Employee.Room Set start)
                this.fRoom = value;
                // *** Start programmer edit section *** (Employee.Room Set end)

                // *** End programmer edit section *** (Employee.Room Set end)
            }
        }

        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {

            /// <summary>
            /// "EmployeeE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View EmployeeE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("EmployeeE", typeof(IIS.MyApp1.Employee));
                }
            }

            /// <summary>
            /// "EmployeeL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View EmployeeL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("EmployeeL", typeof(IIS.MyApp1.Employee));
                }
            }
        }
    }
}
