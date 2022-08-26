import "./topFeaturedInfo.css";
import HomeAnalytics1 from "../../pages/analytics/HomeAnalytics1";
import HomeAnalytics5 from "../../pages/analytics/HomeAnalytics5";
import HomeAnalytics6 from "../../pages/analytics/HomeAnalytics6";
import HomeAnalytics8 from "../../pages/analytics/HomeAnalytics8";
import HomeAnalytics1c from "../../pages/analytics/HomeAnalytics1c";
 
export default function TopFeaturedInfo() {
  return (
            <div className="topFeatured">
                <div className="topFeaturedItemLeft">
                    <div className="topFeaturedContainerLeft">
                        <div className="occupancyLeft">
                            <span className="featuredOccupancy"></span>
                            <HomeAnalytics1 />
                        </div>
                        <div  className="occupancy">
                             <HomeAnalytics1c />
                        </div>
                    </div>
                    
                        <HomeAnalytics8/>

                </div>
                <div className="topFeaturedItemRight">
                    <div className="topFeaturedContainer">
                        <div  className="occupancyLeft">
                             <div>
                             <HomeAnalytics6 />
                             </div>
                        </div>
                    </div>
                
                    <div className="topFeaturedContainer">
                        <div  className="occupancy">
                             <div>
                             <HomeAnalytics5 />
                             </div>
                        </div>
                        <span className="featuredOccupancyRate"></span>
                    </div>
               
            </div>
        </div>

  );
}