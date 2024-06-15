import React from 'react';
import cls from "@src/pages/terms/Terms.module.scss"
import {Sidebar} from "@src/widgets/sidebar";
import {useClass} from "@src/shared/hooks";
import {TextModule, ContainerModule} from "@src/shared/scss";
import {TermsSections} from "@src/pages/terms/models";

export const Terms = () => {
  return (
    <div className={useClass([ContainerModule.wrapper, cls.termsContainer])}>
      <Sidebar sections={TermsSections} link={"https://a26805-42a6.x.d-f.pw/api/docs?filename=Terms_of_use.docx&lng=en-us"}/>
      <div className={useClass([cls.contentWrapper, TextModule.paragraph])}>
        <h1 className={useClass([cls.mainHeader, TextModule.h5])}>Terms of use</h1>
        <p className={useClass([cls.additional, TextModule.paragraph__bold])}>Internet resource (site) INNWORK (hereinafter  referred to as the Resource) is an Internet site that allows users to find out information about coworking and job booking services</p>

        <h2 id="1" className={useClass([cls.sectionHeader, TextModule.paragraph__bold])}>1. ABOUT USER AGREEMENT</h2>
        <p className={cls.subsection}>
          By using/visiting the Resource (including all content posted on the resource), you agree to this USER AGREEMENT located at innwork.com.
          <br/>
          If you do not agree with any of the clauses of this User Agreement, please leave the resource.
          <br/>
          THE USER AGREEMENT may be changed by the Administration without any notification to users.
          <br/>
          The new version of the USER AGREEMENT comes into force after 3 (three) days from the date of its posting, unless otherwise provided by the new version of The USER AGREEMENT.
        </p>

        <h2 id="2" className={useClass([cls.sectionHeader, TextModule.paragraph__bold])}>2. SUBJECT OF THE AGREEMENT</h2>
        <p className={cls.subsection}>
          2.1. The subject of this Agreement is to provide the User of the Internet resource with   access to the Products contained on the INNWORK Website and the provision of services.
          - The Internet resource provides the User with the following types of services;
          <br/>
          - Access to electronic content free of charge, with the right to purchase; (downloading), viewing content;
          <br/>
          - Access to Internet resource search and navigation tools
          <br/>
          - Providing the User with the opportunity to post messages, comments, and rate the content of the Internet resource;
          <br/>
          - Access to information about the services provided;
          <br/>
          - Other types of services (services) sold on the pages of the Internet resource, including paid services (services).
          <br/>
          <p className={cls.subsection}>
            2.1.1. This Agreement covers all currently existing (actually functioning) services of the   Internet resource, as well as any subsequent modifications thereof and additional services of the Internet resource that appear in the future.
          </p>
          2.2. Access to the Internet resource is provided free of charge.
          <br/>
          2.3. This Agreement is a public offer. By accessing the INNWORK Site, the user is deemed to have acceded to this Agreement.
          <br/>
          2.4. The use of materials and services of the INNWORK Site is governed by current legislation.
        </p>

        <h2 id="3" className={useClass([cls.sectionHeader, TextModule.paragraph__bold])}>3. RIGHTS AND OBLIGATIONS OF THE PARTIES</h2>
        <p className={cls.subsection}>
          <h2 id="3.1" className={useClass([cls.subsectionHeader, TextModule.paragraph__bold])}>3.1. The INNWORK website administration has the right to:</h2>
          <div className={cls.subsection}>
            3.1.1. Change the rules for using the INNWORK Site, as well as change the content of this Site. Changes come into force from the moment of publication of the new version of the Site Agreement.
            <br/>
            3.1.2. Restrict access to the site in case of violation by the User of the terms of this Agreement
            <br/>
            3.1.3. Collect, analyze, use, share (including on a paid basis) information about the User contained on the INNWORK Site, including, but not limited to, information about the User’s contact and personal information, information about the User’s actions on the Site, etc.
          </div>

          <h2 id="3.2" className={useClass([cls.subsectionHeader, TextModule.paragraph__bold])}>3.2. The administrator undertakes:</h2>
          <div className={cls.subsection}>
            3.2.1. Provide the User with access to the INNWORK website in the manner and under the terms of this Agreement. Access to individual services and functions of the Site is provided only after the User has been assigned Accounting Information (User registration, authorization).
            <br/>
            3.2.2. Do not disclose the User’s Account Information to third parties, with the exception of the need to provide information to partners involved in the execution of an independent agreement concluded between the INNWORK Site Administrator and the User
            <br/>
            3.2.3. Ensure round-the-clock availability of the server on which the INNWORK Website is located, with the exception of the time of maintenance.
          </div>

          <h2 id="3.3" className={useClass([cls.subsectionHeader, TextModule.paragraph__bold])}>3.3. The user has the right:</h2>
          <div className={cls.subsection}>
            3.3.1. Gain access to use the INNWORK website.
            <br/>
            3.3.2. Use all services available on the site.
            <br/>
            3.3.3. Ask any questions related to the services of the Internet resource using the details that are located in the “INNWORK” section of the website.
            <br/>
            3.3.4. Use the site solely for the purposes and in the manner provided for in the Agreement and not prohibited by the legislation of the Republic of Armenia
          </div>

          <h2 id="3.4" className={useClass([cls.subsectionHeader, TextModule.paragraph__bold])}>3.4. The site user undertakes:</h2>
          <div className={cls.subsection}>
            3.4.1. Provide, upon request, the INNWORK website Administration with additional information that is directly related to the services provided by this Site.
            <br/>
            3.4.2. Respect the property and non-property rights of authors and other copyright holders when using the INNWORK Site.
            <br/>
            3.4.3. Do not take actions that may be considered as disrupting the normal operation of the INNWORK website.
            <br/>
            3.4.4. Do not distribute using the site any confidential information about individuals or legal entities protected by the Legislation of the Republic of Armenia.

            <br/>3.4.5. Do not use the site to distribute advertising information, except with the consent of the Administration of the INNWORK site.
          </div>

          <h2 id="3.5" className={useClass([cls.subsectionHeader, TextModule.paragraph__bold])}>3.5. The site user is prohibited from:</h2>
          <div className={cls.subsection}>
            3.5.1. Use any devices, programs, procedures, algorithms and methods, automatic devices or equivalent manual processes to access, acquire, copy or monitor the content of the Site of this Internet resource.
            <br/>
            3.5.2. Interfere with the proper functioning of the INNWORK website.
            <br/>
            3.5.3. Bypass the navigation structure of the site in any way to obtain or attempt to obtain any information, documents or materials by any means that are not specifically provided by the services of this Site.
            <br/>
            3.5.4. Unauthorized access to the functions of the site, any other systems or networks related to this Site, as well as to any services offered on the Site.
            <br/>
            3.5.5. Violate the security or authentication systems of the Site or any network connected to the Site.
            <br/>
            3.5.6. Perform a reverse search, trace or attempt to trace any information about any other User of the Site.
            <br/>
            3.5.7. Use the Site and its content for any purpose prohibited by the legislation of the Republic of Armenia, as well as incite any illegal activity or other activity that violates the rights of the Internet resource or other persons.
          </div>
        </p>

        <h2 id="4" className={useClass([cls.sectionHeader, TextModule.paragraph__bold])}>4. USE OF THE SITE</h2>
        <p className={cls.subsection}>
          4.1. The Site and the Content included in the INNWORK Site are owned and managed by the Site Administration.
            <br/>
          4.2. The content of the Site cannot be copied, published, reproduced, transmitted or distributed in any way, or posted on the global Internet without the prior consent of the Site Administration.
            <br/>
          4.3. The contents of the INNWORK Site are protected by copyright, trademark, and other intellectual property rights and unfair competition laws.
            <br/>
          4.4. When using some site services, you may need to create a User Account.
            <br/>
          4.5. The User is personally responsible for maintaining the confidentiality of account information, including the password, as well as for any and all activities conducted on behalf of the Account User.
            <br/>
          4.6. This agreement applies to all additional terms and conditions for the purchase of Products and the provision of services provided on the INNWORK Website.
            <br/>
          4.7. Information posted on the INNWORK Website should not be construed as a change to this Agreement.
        </p>

        <h2 id="5" className={useClass([cls.sectionHeader, TextModule.paragraph__bold])}>5. RESPONSIBILITY</h2>
        <p className={cls.subsection}>
          5.1. Any losses that the User may incur in the event of an intentional or careless violation of any provision of this Agreement, as well as due to unauthorized access to the communications of another User, are not reimbursed by the Administration of the INNWORK website.

          <h2 id="5.2" className={useClass([cls.subsectionHeader, TextModule.paragraph__bold])}>5.2. The administration of the INNWORK website is not responsible for:</h2>
          <p className={cls.subsection}>
            5.2.1. Delays or failures in the transaction process resulting from force majeure, as well as any malfunction in telecommunications, computer, electrical and other related systems.
            <br/>
            5.2.2. Actions of transfer systems, banks, payment systems and for delays associated with their work
            <br/>
            5.2.3. Proper functioning of the Site, if the User does not have the necessary technical means to use it, and also does not bear any obligation to provide users with such means.
            <br/>
            5.2.4. Content (content) of information posted on the INNWORK Website, the user is solely responsible for the interpretation and use of the content (information) posted on the INNWORK Website
          </p>
        </p>

        <h2 id="6" className={useClass([cls.sectionHeader, TextModule.paragraph__bold])}>6. VIOLATION OF THE TERMS OF USER AGREEMENT</h2>
        <p className={cls.subsection}>
          6.1. The Site Administration has the right to disclose any information collected about the User of this Site if disclosure is necessary in connection with an investigation or complaint regarding unlawful use of the Site or to identify (identify) a User who may violate or interfere with the rights of the Site Administration or the rights of other Site Users.
            <br/>
          6.2. The administration of the INNWORK website has the right to disclose any information about the User that it deems necessary to comply with the provisions of current legislation or court decisions, ensure compliance with the terms of this Agreement, protect the rights or safety of the name of the organization, Users
            <br/>
          6.3. The administration of the INNWORK website has the right, without prior notice to the User, to terminate and (or) block access to the Site if the User has violated this Agreement or the terms of use of the Site contained in other documents, as well as in the event of termination of the Site or due to a technical problem or problem.
            <br/>
          6.4. The site administration is not responsible to the User or third parties for termination of access to the Site in the event of a violation by the User of any provision of this Agreement or other document containing the terms of use of the INNWORK Site.
        </p>

        <h2 id="7" className={useClass([cls.sectionHeader, TextModule.paragraph__bold])}>7. DISPUTE RESOLUTION</h2>
        <p className={cls.subsection}>
          7.1. In the event of any disagreement or dispute between the Parties to this Agreement, a prerequisite before going to court is to file a claim (a written proposal for a voluntary settlement of the dispute).
          <br/>
          7.2. The recipient of the claim, within 30 (thirty) calendar days from the date of its receipt, notifies the claimant in writing of the results of consideration of the claim.
          <br/>
          7.3. If it is impossible to resolve the dispute voluntarily, either Party has the right to go to court to protect their rights, which are granted to them by current legislation.
          <br/>
          7.4. Any claim regarding the terms of use of the INNWORK Site must be brought within the period after the grounds for the claim arise, with the exception of copyright protection for materials on the INNWORK Site protected by law. If the terms of this paragraph are violated, any claim or cause of action is barred by statute of limitations.
        </p>

        <h2 id="8" className={useClass([cls.sectionHeader, TextModule.paragraph__bold])}>8. ADDITIONAL TERMS</h2>
        <p className={cls.subsection}>
          8.1. The administration of the INNWORK website does not accept counter-proposals from the User regarding changes to this User Agreement.
          <br/>
          8.2. User reviews posted on the INNWORK Site are not confidential information and can be used by the Site Administration without restrictions.
        </p>
      </div>
    </div>
  );
};