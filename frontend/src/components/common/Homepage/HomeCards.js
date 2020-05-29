import React from 'react'

const imageUrlStart = 'https://res.cloudinary.com/jompra/image/upload/v1590686665/Plntify/'

class HomeCards extends React.Component {
  state = {
    allPlants: [],
    plantImages: [
      `${imageUrlStart}Asparagus_Fern_fuzzy_j_600x_xwzsoe.jpg`,
      `${imageUrlStart}Chinese_Money_Plant_j_600x_gpkswt.jpg`,
      `${imageUrlStart}180912-G_T_LupeWhiteLarge_001_600x_keqcdg.jpg`,
      `${imageUrlStart}Calathea_Medallion_600x_quypyo.jpg`,
      `${imageUrlStart}Alacosia_j_600x_roth7y.jpg`,
      `${imageUrlStart}Peace_Lily_j_600x_cwjef4.jpg`,
      `${imageUrlStart}Devils_Ivy_j_600x_haneng.jpg`,
      `${imageUrlStart}Bagonia_j_800x_svqbyl.jpg`,
      `${imageUrlStart}Rubber_Tree_j_800x_lvmknt.jpg`
    ]
  }

  render() {
    return (
      <section>
        
        <div className="columns">
        <div className="column">
          {this.state.plantImages.slice(0, 3).map((image, i) => (
            
              <figure key={i}
                className="image is-square">
                <img src={image} alt="plant" />
              </figure>
            
          ))}
          </div>
          <div className="column is-hidden-mobile">
            {this.state.plantImages.slice(3, 6).map((image, i) => (
              
                <figure key={i}
                  className="image is-square">
                  <img src={image} alt="plant" />
                </figure>
              
            ))}
          </div>
          <div className="column is-hidden-mobile">
            {this.state.plantImages.slice(6, 9).map((image, i) => (
              
                <figure key={i}
                  className="image is-square">
                  <img src={image} alt="plant" />
                </figure>
              
            ))}
          </div>
        </div>
      </section>
      
    )
  }
}

export default HomeCards