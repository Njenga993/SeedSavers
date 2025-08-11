import React, { useState } from "react";
import "../styles/CommunitySeedBank.css";
import seedStorage from "../assets/cb.jpg";
import farmerWithSeeds from "../assets/cbs.jpg";

const CommunitySeedBank: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="csb-section">
      <div className="csb-container">
        {/* Left Side Images */}
        <div className="csb-images">
          <img src={seedStorage} alt="Seed storage" />
          <img src={farmerWithSeeds} alt="Farmer with seeds" />
        </div>

        {/* Right Side Text */}
        <div className="csb-text">
          <h2>Community Seed Bank Platform</h2>
          <p>
            Our Community Seed Bank initiative empowers farmers to conserve, share,
            and utilize indigenous seed varieties. It ensures seed sovereignty,
            protects biodiversity, and promotes agroecological farming practices.
          </p>
          <ul>
            <li> Preserves local seed diversity</li>
            <li> Encourages seed exchange among farmers</li>
            <li> Enhances climate resilience and food sovereignty</li>
            <li> Supports knowledge sharing and intergenerational learning</li>
          </ul>

          {/* Contact */}
          <div className="csb-contact">
            <p>
               Email: <a href="mailto:info@seedsaverskenya.org">info@seedsaverskenya.org</a>
            </p>
            <p>
               Phone: <a href="tel:+254712451777">+254-712-451777</a>
            </p>
          </div>

          {/* Toggle Expandable Info */}
          <button className="incubation-cta" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>

      {/* Full-width expanded section */}
      {showMore && (
        <div className="csb-expanded-full">
          <div className="csb-expanded-content">
            <h3>About the Platform</h3>
            <p>
              Community Seed Banks Platform ( CSB) is a self-organized structure within the<strong> Seed Savers
               Network </strong>that brings together<strong> 112 community seed banks </strong>across Kenya and beyond for knowledge
                sharing, collective action, and advocacy in support of seed sovereignty and agrobiodiversity
                 conservation. As of 2025, the platform supports and coordinates the efforts of 112 active
                  community seed banks spread across the country.
            </p>
            <p>
              The CSB has grown into a powerful coordination hub, supporting the tireless efforts of 
              these 112 active seed banks. This incredible achievement has been made possible through the <strong>Seed
               Exchange Kenya initiative and the innovative Seed Exchange App</strong>, which have opened new doors for 
               seed sharing, collaboration, and empowerment ensuring that the legacy of diverse, indigenous 
               seeds thrives for generations to come. 
            </p>
            <p>
              It was formed after national dialogue sessions with farmers from <strong>20+ counties</strong> including
              Kakamega, Bungoma, Nakuru, Embu, Siaya, Turkana, and more.
            </p>

            <h4>Mission</h4>
            <p>
              To strengthen the capacity, collaboration, and advocacy of community seed banks by promoting inclusive
              governance, farmer-led seed systems, and preservation of indigenous seeds.
            </p>

            <h4>Core Values</h4>
            <ul>
              <li><strong>Seed Sovereignty:</strong> Right to save, use, exchange, and sell seeds.</li>
              <li><strong>Solidarity:</strong> Mutual support among members.</li>
              <li><strong>Sustainability:</strong> Conservation of biodiversity.</li>
              <li><strong>Inclusivity:</strong> Women, youth, and marginalized group participation.</li>
              <li><strong>Transparency:</strong> Accountability and open communication.</li>
              <li><strong>Innovation:</strong> Learning through training and seed fairs.</li>
            </ul>

            <h4>Governance & Operations</h4>
            <ul>
              <li>Led by elected representatives from various regions.</li>
              <li>Holds biannual leadership meetings and regional seed fairs.</li>
              <li>Operates under a code of conduct and democratic representation.</li>
            </ul>

            <h4>Supported Community Seed Banks</h4>
            <div className="csb-table-wrapper">
              <table className="csb-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Seed Bank Name</th>
                    <th>County</th>
                  </tr>
                </thead>
                <tbody>
                  {[
    ['1', 'Endorois Community Sb', 'BARINGO'],
    ['2', 'Namunyak Seedbank', 'BARINGO'],
    ['3', 'Chomyiet Seedbank', 'BARINGO'],
    ['4', 'Toloshie Seedbank', 'BARINGO'],
    ['5', 'Naapu Seedbank', 'BARINGO'],
    ['6', 'Kupapel Seedbank', 'BARINGO'],
    ['7', 'Sossion C. Seed Bank', 'BARINGO'],
    ['8', 'Naitoty Seed Bank', 'BARINGO'],
    ['9', 'Pasinai Farmers Seed Bank', 'BARINGO'],
    ['10', 'Kaptich Farmers Seedbank', 'BARINGO'],
    ['11', 'Ngerotet Seedbank', 'BARINGO'],
    ['12', 'Ngoipiriri', 'BARINGO'],
    ['13', 'Meoro Seed Bank', 'BARINGO'],
    ['14', 'Chemeron Seed Bank', 'BARINGO'],
    ['15', 'Lamalok Seed Bank', 'BARINGO'],
    ['16', 'Seed Savers Seedbank', 'BARINGO'],
    ['17', 'Ujumbe Mpya', 'NAKURU'],
    ['18', 'Muniu Seed Bank', 'NAKURU'],
    ['19', 'United Seed Bank', 'NAKURU'],
    ['20', 'Kiahiti Seed Bank', 'NAKURU'],
    ['21', 'Belacom Seed Bank', 'NAKURU'],
    ['22', 'Mwireri Seed Bank', 'NAKURU'],
    ['23', 'Eden Community Seedbak', 'NAKURU'],
    ['24', 'Makongo Farmers Seed Bank', 'NAKURU'],
    ['25', 'Mbomboi Seed Bank', 'NAKURU'],
    ['26', 'Kiambogo Seed Bank', 'NAKURU'],
    ['27', 'Kampi Moto', 'NAKURU'],
    ['28', 'Kikopey Seed Bank', 'NAKURU'],
    ['29', 'Taka Mema Seedbank', 'NAKURU'],
    ['30', 'Tumaini Seed Bank', 'NAKURU'],
    ['31', 'Thome Organic', 'NAKURU'],
    ['32', 'Team Organic', 'NAKURU'],
    ['33', 'Songoloi Farmers Seedbank', 'NAKURU'],
    ['34', 'Mzee Wanyama Community Seedbank', 'NAKURU'],
    ['35', 'Mau Narok Seed Bank', 'NAKURU'],
    ['36', 'Kasambara Bidii', 'NAKURU'],
    ['37', 'Gilgil Towns Ship Seed Bank', 'NAKURU'],
    ['38', 'Nagum Water Jar Community Seed Bank', 'NAKURU'],
    ['39', 'Wendani Thome', 'NAKURU'],
    ['40', 'Wendani Community Seed Bank', 'NAKURU'],
    ['41', 'Kasambara Bidii Community Seed Bank', 'NAKURU'],
    ['42', 'Kigogo Community Seed Bank', 'NAKURU'],
    ['43', 'Mwiruti Seed Bank', 'NAKURU'],
    ['44', 'Mbegi Seedbank', 'NAKURU'],
    ['45', 'Good Luck Seed Bank', 'NAKURU'],
    ['46', 'Kamathatha Muoroto Seed Bank', 'NAKURU'],
    ['47', 'Maraigushu Seed Bank', 'NAKURU'],
    ['48', 'Seed Savers Central Community Seed Bank', 'NAKURU'],
    ['49', 'Kiamanji Seed Bank', 'NAKURU'],
    ['50', 'Ebenezar Seed Bank', 'NAKURU'],
    ['51', 'Gema Seed Bank', 'NAKURU'],
    ['52', 'Kambaa Self Help Group', 'NAKURU'],
    ['53', 'St John New Cbo Seed Bank', 'NAKURU'],
    ['54', 'St Catherine Seed Bank', 'NAKURU'],
    ['55', 'Mbegi Jiweze Seed Bank', 'NAKURU'],
    ['56', 'Gilgil Towns Ship Seed Bank', 'NAKURU'],
    ['57', 'Wirutire Community Seedbank', 'NAKURU'],
    ['58', 'Nyakinyua Seed Bank', 'NAKURU'],
    ['59', 'Eshilakwe Seed Bank', 'KAKAMEGA'],
    ['60', 'Navakholo Seed Bank', 'KAKAMEGA'],
    ['61', 'Upendo Emulakha Seed Bank', 'KAKAMEGA'],
    ['62', 'Mumias West Farmers Community Seedbank', 'KAKAMEGA'],
    ['63', 'Murumba Seedbank', 'KAKAMEGA'],
    ['64', 'Munenga Seed Bank', 'KAKAMEGA'],
    ['65', 'Munduma Seed Bank', 'KAKAMEGA'],
    ['66', 'Vihiga Community Seedbank', 'VIHIGA'],
    ['67', 'Vigulu Community Seed Bank', 'VIHIGA'],
    ['68', 'Essunza Community Seed Bank', 'VIHIGA'],
    ['69', 'Musanda Seed Bank', 'KAKAMEGA'],
    ['70', 'Eshironyanga Seedbank', 'KAKAMEGA'],
    ['71', 'Butere Wasafi Seed Bank', 'KAKAMEGA'],
    ['72', 'Mwitubwi Seed Bank', 'VIHIGA'],
    ['73', 'Motomwaka Seed Bank', 'KAKAMEGA'],
    ['74', 'Emukaya Seed Bank', 'KAKAMEGA'],
    ['75', 'Vision Igotse Seed Bank', 'KAKAMEGA'],
    ['76', 'Mahondo Seed Bank', 'KAKAMEGA'],
    ['77', 'Bukembe Community Seed Bank', 'BUNGOMA'],
    ['78', 'Mechimeru Seedbank', 'BUNGOMA'],
    ['79', 'Bulondo Seedbank', 'BUNGOMA'],
    ['80', 'Got Osimbo Seedbank', 'SIAYA'],
    ['81', 'East Yiro Seedbank', 'SIAYA'],
    ['82', 'Ambira Seedbank', 'SIAYA'],
    ['83', 'Mahondo Community Seedbank', 'KAKAMEGA'],
    ['84', 'Bushieni Community Seedbank', 'KAKAMEGA'],
    ['85', 'Wambulishe Community Seedbank', 'KAKAMEGA'],
    ['86', 'Mumias West Farmers Community Seedbank', 'KAKAMEGA'],
    ['87', 'Kabudi-Agoro Community Seedbank', 'KISUMU'],
    ['88', 'Nyando Community Seedbank', 'KISUMU'],
    ['89', 'Kabudi-Agoro Community Seedbank', 'KABUDI'],
    ['90', 'Vihiga Community Seedbank', 'VIHIGA'],
    ['91', 'Vigulu Seedbank', 'VIHIGA'],
    ['92', 'Essunza Seedbank', 'VIHIGA'],
    ['93', 'Muunduma Community Seedbank', 'KAKAMEGA'],
    ['94', 'Igotse Farmers Seedbank', 'KAKAMEGA'],
    ['95', 'Odonyo Sabuk Community Seedbank', 'MACHAKOS'],
    ['96', 'Musamba Seedbank', 'KAKAMEGA'],
    ['97', 'Sunkai Community Seedbank', 'VIHIGA'],
    ['98', 'Nooya Cga Seedbank', 'KAJIADO'],
    ['99', 'Kadara Community Seedbank', 'MURANGA'],
    ['100', 'Mwiguithanio Seedbank', 'NAKURU'],
    ['101', 'Thome Organic Seedbank', 'NAKURU'],
    ['102', 'Dondori Farmers Seedbank', 'NAKURU'],
    ['103', 'Lamu Community Seedbank', 'LAMU'],
    ['104', 'Melangine Seedbank', 'NYANDARWA'],
    ['105', 'Fifty Strong Seedbank', 'NJORO'],
    ['106', 'Katilu Community Seedbank', 'TURKANA'],
    ['107', 'Kangalita Community Seedbank', 'TURKANA'],
    ['108', 'Turkwel Community Seedbank', 'TURKANA'],
    ['109', 'Kanduku Community Seed Bank', 'KANDUKU'],
    ['110', 'Mwaani Community Seed Bank', 'MWAANI'],
    ['111', 'Mwiyega community seedbank', 'KAKAMEGA'],
    ['112', 'Eshilakwe group seedbank', 'KAKAMEGA'],
                  ].map(([id, name, county], index) => (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{county}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommunitySeedBank;
