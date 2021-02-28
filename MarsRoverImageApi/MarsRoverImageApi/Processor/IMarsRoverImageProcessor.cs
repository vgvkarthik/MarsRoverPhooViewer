using System.Threading.Tasks;

namespace MarsRoverImageApi
{
    public interface IMarsRoverImageProcessor
    {
        Task<ImageDetails> GetImageDetails(string date);
    }
}
