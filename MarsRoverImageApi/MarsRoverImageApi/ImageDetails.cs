using System;
using System.Collections.Generic;

namespace MarsRoverImageApi
{
   public class ImageDetails
   {
        public List<Photo> Photos { get; set; }
    }

    public class Photo
    {
        public string Id { get; set; }
        public string Img_Src{ get; set; }
        public string Earth_Date{ get; set; }
    }
}
