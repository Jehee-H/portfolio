import "../styles/bachelor.css";
import analysisNotebook from "../assets/MFA_Auswertung.ipynb";
import surveyData from "../assets/data_Bachelorarbeit_MFA_Jehee_Han_2026-10-17_03-46.csv";
import variabelOverview from "../assets/variablen_uebersicht.pdf";

const Bachelor = () => {
    return (
        <div className="bachelor-container">
            <h3>Bachelorarbeit - Jehee Han</h3>
            <h3 className="">Inwiefern beeinflusst technisches Vorwissen die Wahrnehmung und Akzeptanz moderner MFA-Verfahren -- ein Vergleich zwischen technischen und nicht-technischen Nutzern</h3>

            <div className="bachelor-links">
                <a href={variabelOverview} download="variablen_uebersicht.pdf">Variabel-Übersicht</a>
                <a href={surveyData} download="data_Bachelorarbeit_MFA_Jehee_Han_2026-10-17_03-46.csv">
                    SoSciSurvey-Rohdatei herunterladen
                </a>
                <a href={analysisNotebook} download="MFA_Auswertung.ipynb">
                    Jupyter-Notebook Code herunterladen
                </a>
            </div>
        </div>
    );
};

export default Bachelor;
