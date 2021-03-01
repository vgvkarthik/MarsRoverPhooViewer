# MarsRoverPhotoViewer

This Repo consists of 
1. MarsRoverImageApi: .net core API(3.1) which talks to the https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY
and get the imagedetails

2. This API accepts earthdate as input and gets the details for the date
Url:
http://localhost:5000/api/MarsRoverImage/GetImage?date=2015-6-3

Sample Response:
{
    "photos": [
        {
            "id": "102685",
            "img_Src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG",
            "earth_Date": "2015-06-03"
        },
        {
            "id": "102686",
            "img_Src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG",
            "earth_Date": "2015-06-03"
        },
        {
            "id": "102842",
            "img_Src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG",
            "earth_Date": "2015-06-03"
        },
        {
            "id": "102843",
            "img_Src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RRB_486615482EDR_F0481570RHAZ00323M_.JPG",
            "earth_Date": "2015-06-03"
        }
    ]
}


2. MarsRoverImageProcessor - Angular UI application talks to the .MarsRoverImageApi and populate photos from Maes

![image](https://user-images.githubusercontent.com/11185598/109544801-00152180-7a96-11eb-97e3-b4ce9e59e479.png)

