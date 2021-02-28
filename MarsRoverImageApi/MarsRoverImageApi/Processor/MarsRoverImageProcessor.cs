using System.Net.Http;
using System.Threading.Tasks;
using MarsRoverImageApi;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace MarsRoverImageApi
{
    public class MarsRoverImageProcessor : IMarsRoverImageProcessor
    {
        private readonly IConfiguration _configuration;

        public MarsRoverImageProcessor(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public async Task<ImageDetails> GetImageDetails(string date)
        {
            string result = null;
            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(string.Format(_configuration["AppConfig:NasaUrl"],date));
            if (response.IsSuccessStatusCode)
            {
                result = await response.Content.ReadAsStringAsync();
            }
            return JsonConvert.DeserializeObject<ImageDetails>(result);
        }

    }
}