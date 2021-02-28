# MarsRoverPhotoViewer

This Repo consists of 
1. .net core API which talks to the https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY
and get the imagedetails

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

2. Angular UI application talks to the .netcore API and populate the UI
