using AngularTestApp.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Mvc;

namespace AngularTestApp.Controllers
{
    public class ValuesController : Controller
    {
        private IEnumerable<ResultModel> _result;

        public ValuesController()
        {
            _result = new List<ResultModel>()
            {
                new ResultModel() {Name="name", Title = "title", Discription="discr", Link = "link", Categories = new List<string>() { "string1", "string2", "string3"} },
                new ResultModel() {Name="name1", Title = "title1", Discription="discr1", Link = "link1", Categories = new List<string>() { "string21", "string12", "string13"} },
                new ResultModel() {Name="name2", Title = "title2", Discription="discr2", Link = "link2", Categories = new List<string>() { "string11", "string21", "string31"} },
                new ResultModel() {Name="name3", Title = "title3", Discription="discr3", Link = "link3", Categories = new List<string>() { "string12", "string22", "string32"} },
                new ResultModel() {Name="name4", Title = "title4", Discription="discr4", Link = "link4", Categories = new List<string>() { "string13", "string23", "string33"} }
            };
        }
        
        public JsonResult Get()
        {
            
            return Json(_result, JsonRequestBehavior.AllowGet);
        }
    }
}
