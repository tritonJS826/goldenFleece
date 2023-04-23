import {useState} from "react";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {PageBorder} from "src/component/pageBorder/PageBorder";
import {MailApiService} from "src/service/MailApi/MailApi";
import {ApiAskAdminPostRequest} from "src/autogenerated/gf-server-api/models/ApiAskAdminPostRequest";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import styles from "src/logic/contactsPage/ContactsPage.module.scss";

const defaultAskAdminFormData: ApiAskAdminPostRequest = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const ContactsPage = () => {
  const {contactsPage, askAdminForm} = useDictionary().dictionary;
  const [askAdminFormData, setAskAdminFormData] = useState<ApiAskAdminPostRequest>(defaultAskAdminFormData);

  const sendMail = async () => {
    const res = await MailApiService.askAdminMessage({apiAskAdminPostRequest: askAdminFormData});
  };

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendMail();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAskAdminFormData({...askAdminFormData, [e.target.name]: e.target.value});
  };

  return (
    <PageBorder isShowLoader={false}>
      <div className={styles.wrap}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>
            {contactsPage.title}
          </h1>
          <div className={styles.contactsData}>
            <div className={styles.minititle}>
              {contactsPage.phone}
            </div>
            <p className={styles.text}>
              +12346789
            </p>
            <div className={styles.minititle}>
              {contactsPage.email}
            </div>
            <p className={styles.text}>
              goldenFleece@gmain.com
            </p>
            <div className={styles.minititle}>
              {contactsPage.address}
            </div>
            <p className={styles.text}>
              {contactsPage.street}
              ,
            </p>
            <p className={styles.text}>
              {contactsPage.location}
            </p>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className={styles.form}
        >
          <div className={styles.formGoup}>
            <label className={styles.label}>
              {askAdminForm.name}
              <input
                type="text"
                className={styles.input}
                placeholder={askAdminForm.name}
                name="name"
                value={askAdminFormData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formGoup}>
            <label className={styles.label}>
              {askAdminForm.email}
              <input
                type="email"
                className={styles.input}
                placeholder={askAdminForm.email}
                name="email"
                value={askAdminFormData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formGoup}>
            <label className={styles.label}>
              {askAdminForm.phone}
              <input
                type="text"
                className={styles.input}
                placeholder={askAdminForm.phone}
                name="phone"
                value={askAdminFormData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formGoup}>
            <label className={styles.label}>
              {askAdminForm.message}
              <input
                type="text"
                className={styles.input}
                placeholder={askAdminForm.message}
                name="message"
                value={askAdminFormData.message}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <Button
            type="submit"
            onClick={() => onSubmit}
            value={askAdminForm.buttonText}
          />
        </form>
      </div>
    </PageBorder>
  );
};