using System.Collections.Generic;
using System.Linq; 
using Microsoft.AspNet.Mvc;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    public class MovieController : Controller
    {
        private readonly ApplicationDbContext _applicationDbContext;
         
         public MovieController( 
            ApplicationDbContext applicationDbContext)
        { 
            _applicationDbContext = applicationDbContext;
        }


        // GET: api/movie
        [HttpGet]
        public IEnumerable<Movie> Get()
        { 
            return _applicationDbContext.Movies.ToList();
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public Movie Get(int id)
        {
            return _applicationDbContext.Movies.FirstOrDefault(m=> m.ID == id);
        }

        // POST api/movie
        [HttpPost]
        public void Post([FromBody]Movie obj)
        {
            _applicationDbContext.Movies.Add(obj);
        }

        // PUT api/movie/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Movie obj)
        {
            var dbobj= _applicationDbContext.Movies.FirstOrDefault(m=> m.ID == id);
            dbobj.Genre = obj.Genre;
            dbobj.Price = obj.Price;
            dbobj.Title = obj.Title; 
            _applicationDbContext.Movies.Update(dbobj);
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
             var dbobj= _applicationDbContext.Movies.FirstOrDefault(m=> m.ID == id);
             _applicationDbContext.Movies.Remove(dbobj);
        }
    }
}
