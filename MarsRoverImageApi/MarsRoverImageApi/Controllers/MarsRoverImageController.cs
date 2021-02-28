using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MarsRoverImageApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MarsRoverImageController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<MarsRoverImageController> _logger;
        private readonly IMarsRoverImageProcessor _imgProcessor;

        public MarsRoverImageController(ILogger<MarsRoverImageController> logger, IMarsRoverImageProcessor imgProcessor)
        {
            _logger = logger;
            _imgProcessor = imgProcessor;
        }

        [HttpGet]
        [Route("GetImage")]
        public async Task<ActionResult> GetMarsRoverImage([FromQuery]string date)
        {            
            return Ok(await _imgProcessor.GetImageDetails(date));
        }
    }
}
