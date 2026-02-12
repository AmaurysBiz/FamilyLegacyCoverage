import React, { useEffect } from "react";
import "../App.css";


export default function Disclaimer() {

  useEffect(() => {
    document.title = "Disclaimer | Family Legacy Coverage";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Important disclaimer about the information provided on Family Legacy Coverage.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.familylegacycoverage.com/disclaimer";
  }, []);

  return (
    <div className="page-content">
      <h1>Disclosure & Legal Disclaimer</h1>
      <p className="updated-date">Last updated: November 2025</p>

      <p>
        This website, FamilyLegacyCoverage.com (“we,” “us,” or “our”), provides
        educational information about Final Expense and Burial Insurance. While
        we make every effort to ensure accuracy and clarity, the information
        presented on this site should not be interpreted as legal, financial, or
        tax advice. By using this website, you acknowledge and agree to the
        following disclosures and limitations.
      </p>

      <h2>1. No Guarantee of Coverage, Approval, or Pricing</h2>
      <p>
        All insurance information provided on Family Legacy Coverage is for
        general educational purposes only. Approval, eligibility, coverage
        amounts, waiting periods, premium rates, and policy features are always
        determined exclusively by the issuing insurance carrier after reviewing
        your individual application, health history, residency, age, and other
        relevant factors.
      </p>
      <p>
        Although we strive to match you with programs suited to your needs,
        <strong>
          no website, agent, or article can guarantee approval or specific
          pricing
        </strong>{" "}
        until you have completed an application and the carrier has issued a
        decision.
      </p>

      <h2>2. No Professional Advice</h2>
      <p>
        FamilyLegacyCoverage.com does not provide legal, medical, or tax
        advice. All insurance decisions should be made after consulting with a
        licensed insurance professional or other qualified adviser. Any
        financial examples or illustrations provided are for educational
        purposes only and are not guarantees of future results.
      </p>

      <h2>3. Educational Purposes Only</h2>
      <p>
        The descriptions of insurance products, approval guidelines, underwriting
        categories, and pricing ranges represent general industry practices and
        may not reflect the exact rules of every insurance carrier. Carriers may
        update their guidelines without notice.
      </p>
      <p>
        The information on this website is designed to help consumers better
        understand Final Expense Insurance. It should not be interpreted as an
        official statement from any insurer.
      </p>

      <h2>4. Not Affiliated With Government Programs</h2>
      <p>
        This website is not endorsed by or affiliated with Medicare, Medicaid,
        Social Security, or any federal, state, or local government program.
        Insurance products discussed here are{" "}
        <strong>private insurance plans</strong> issued by licensed companies.
      </p>

      <h2>5. Licensing & Appointments</h2>
      <p>
        Only individuals who are properly licensed in the applicable state(s)
        may discuss, recommend, or sell insurance products. If you communicate
        with a licensed agent through this website, your agent will inform you
        of his or her licensing status and appointments with insurance carriers.
      </p>
      <p>
        If you submit a request for information outside the state of Kentucky,
        you may be contacted by a partner agent who is properly licensed in your
        state.
      </p>

      <h2>6. No Endorsement or Responsibility for Third-Party Content</h2>
      <p>
        This website may contain links to third-party insurers, regulatory
        resources, or financial information. We do not control or guarantee the
        accuracy of third-party content and are not responsible for external
        websites.
      </p>

      <h2>7. Accuracy and Completeness Not Guaranteed</h2>
      <p>
        While we strive to keep all information current, insurance rates and
        underwriting rules change frequently. We cannot guarantee that all
        information on this website is always complete, up-to-date, or applicable
        to every situation.
      </p>

      <h2>8. Lead Information Disclosure</h2>
      <p>
        When you submit your information through our website forms, phone
        numbers, or SMS tools, you consent to be contacted by a licensed agent
        or partner agency. This may include phone calls, emails, or text
        messages regarding insurance programs, even if your phone number is on
        the federal or state Do-Not-Call list.
      </p>
      <p>
        Submitting information does not obligate you to purchase anything, and
        you may opt out at any time.
      </p>

      <h2>9. No Warranties or Liability</h2>
      <p>
        This website, its owners, and its representatives disclaim all
        warranties of any kind, express or implied. We are not liable for any
        harm, loss, or damages arising from your use of this website or from any
        actions you take based on the information provided.
      </p>

      <h2>10. Contact Information</h2>
      <p>
        For questions or concerns regarding this Disclaimer, please contact:
      </p>
      <p>
        <strong>Email:</strong> support@familylegacycoverage.com
        <br />
        <strong>Phone:</strong> 502-257-6243
      </p>
    </div>
  );
}
