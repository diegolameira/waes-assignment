import React, { PureComponent } from "react";

import Main from "../components/main";
import Popup from "../components/highlight-popup";
import Highlighter from "../containers/highlighter";

export default class extends PureComponent {
  render() {
    return (
      <Highlighter>
        {({highlights, onMouseUp, clientX, clientY, showTooltip, setColor}) => (
        <>
          <div onMouseUp={onMouseUp}>
            <Main {...data} />
          </div>
          <Popup {...{clientX, clientY, showTooltip, setColor }} />
        </>
        )}
      </Highlighter>
    )
  }
}

// This might be fetched from an API, but for this assignment I'm just keeping it simple
// I like to keep some declarations bellow like this because it helps with readability
const data = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa videamus, quae a te de amicitia dicta sunt. Iam id ipsum absurdum, maximum malum neglegi. Haeret in salebra. Quibus rebus vita consentiens virtutibusque respondens recta et honesta et constans et naturae congruens existimari potest. Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius quiddam et obscurius. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Hic quoque suus est de summoque bono dissentiens dici vere Peripateticus non potest. Duo Reges: constructio interrete. Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil habemus. Gerendus est mos, modo recte sentiat. Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc quidem hactenus; Cum id quoque, ut cupiebat, audivisset, evelli iussit eam, qua erat transfixus, hastam. A villa enim, credo, et: Si ibi te esse scissem, ad te ipse venissem. Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere. Cum autem in quo sapienter dicimus, id a primo rectissime dicitur. Sit enim idem caecus, debilis. Pauca mutat vel plura sane; Ut in geometria, prima si dederis, danda sunt omnia. Quo studio Aristophanem putamus aetatem in litteris duxisse? Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D. At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit;"
};
