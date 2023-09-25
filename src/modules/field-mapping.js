const fieldMapping = {
    postcodeloterij: {
        deceased_person: {
            npl_selectors: {
                'custom-NtxGbMkNnTQHdxrQW': ' Ik heb een vraag',
                'custom-eiJPwonHRv5CWe2MF': ' Mijn Deelname',
                'custom-k6GXP5KXcZmgBBiPq': 'Overig'
            },
            'postal_code': 'custom-mdh9FSmNw8HNpAwv4',
            'house_number': 'custom-NFPrkvLyuFFY4WXSy',
            'house_number_extra': 'custom-P9dNYxdvaEJdCm7T3',
            'city': 'custom-C8CgwKjEsRezqqmJ6',
            'iban': 'custom-f2XWvtzo2W7gozans',
            'explanation': 'question',
        },
        user: {
            'gender': 'custom-cNTZ3MZMzqYM8LMKv',
            'initials': 'custom-yeSH2aLK4tWQRQ3Fe',
            'first_name': 'custom-oG5vtXo9tCANNf9ha',
            'prefixes': 'custom-H9Nzs8ARwZvdpmXgY',
            'last_name': 'custom-jwcQ5KshDrceW4xNM',
            'telnr_nabestaande': 'custom-GRxy7T5AJxknb65io',
            'email': 'email',
        },
        organization: {
            'subject': 'subject'
        },
    },
    vriendenloterij: {
        deceased_person: {
            npl_selectors: {
                'custom-FwsED3wfnBR73Nndf': ' Ik heb een vraag',
                'custom-iy38e3WYXJfC5NPv2': ' Mijn Deelname',
                'custom-KtdmK8FwJ3Ed2WAeZ': 'Overig'
            },

            'postal_code': 'custom-mN7iNzcZP6DPt4LBy',
            'house_number': 'custom-5uKnLWTBdWtiDtDjH',
            'house_number_extra': 'custom-WQBHjrTuoxW28rDpv',
            'city': 'custom-dwi6LHX9z7mm83T5f',
            'iban': 'custom-TW5HRJ7y6f56ueiJZ',
            'birth_date': 'custom-88qTHkcFa9Yij9szh',
            'explanation': 'question',
        },
        user: {
            'gender': 'custom-vBKQJrMrh3ihryCt5',
            'initials': 'custom-WSm74aCRv7GiGyaGA',
            'first_name': 'custom-o4KqqTd4RbChzkBeL',
            'prefixes': 'custom-WhYpxPEXRFTE3MRat',
            'last_name': 'custom-qGMrbawEcPmsXXa5S',
            'email': 'email',
            'telnr_nabestaande': 'custom-RguEgGG2JXGvNL5pi',
        },
        organization: {
            'subject': 'subject'
        }
        
    },
    anwb: {
        deceased_person: {
            'gender': 'salutation',
            'customer_number': 'relationNumber',
            'initials': 'initials',
            'prefixes': 'prefix',
            'last_name':'surname',
            'house_number':'houseNumber',
            'house_number_extra':'numberSuffix',
            'postal_code': 'postalCode',
            'address': 'street',
            'city': 'city',
            'birth_date': 'dateOfBirth',
            'died_date': 'dateOfDeath',
        },
        user: {
            'gender': 'salutation',
            'initials': 'initials',
            'prefixes': 'prefix',
            'last_name':'surname',
            'email': 'emailAddress',
            'telnr_nabestaande': 'phoneNumber',
        },
    },
    abnamro: {
        user : {
            'clickable': 'P391-C2-C1-C1-F0-1', //user role
            'gender': 'P391-C2-C1-C1-C1-C0-F0-',
            'initials': 'P391-C2-C1-C2-C1-C1-F0',
            'prefixes':'P391-C2-C1-C2-C1-C2-F0',
            'last_name': 'P391-C2-C1-C2-C1-C3-F0',
            'house_number': 'P391-C2-C1-C2-C3-C1-C0-C1-F0',
            'house_number_extra': 'P391-C2-C1-C2-C3-C1-C0-C2-F0',
            'postal_code': 'P391-C2-C1-C2-C3-C1-C0-C0-F0',
            'telnr_nabestaande': 'P391-C2-C1-C2-C5-F0',
            'email': 'P391-C2-C1-C2-C7-F0',
            'confirm_email': 'P391-C2-C1-C2-C8-F0',
            'relatie': 'dropdown-P391-C2-C1-C2-F9',
        },
        deceased_person: {
            'gender': 'P390-C2-C0-C0-C1-C0-F0-',
            'initials': 'P390-C2-C0-C0-C1-C1-F0',
            'prefixes': 'P390-C2-C0-C0-C1-C2-F0',
            'last_name': 'P390-C2-C0-C0-C1-C3-F0',
            'house_number': 'P390-C2-C0-C0-C3-C1-C0-C1-F0',
            'house_number_extra': 'P390-C2-C0-C0-C3-C1-C0-C2-F0',
            'postal_code': 'P390-C2-C0-C0-C3-C1-C0-C0-F0',
            'birth_date': 'P390-C2-C0-C0-C4-F0', // format DD-MM-YYYY
            'iban': 'P390-C2-C0-C0-C7-F0',
            'clickable': 'P390-C2-C0-C0-F8-3', //what to do with the bankaccount 
        }
    },
    algemeendagblad: {
        deceased_person: {
            'address': 'edit-submitted-adress',
            'house_number': 'edit-submitted-huisnummer',
            'house_number_extra': 'edit-submitted-huisnummertoevoeging',
            'postal_code': 'edit-submitted-postcode',
            'city': 'edit-submitted-plaatsnaam',
            'explanation': 'edit-submitted-contact-message',
        },
        user: {
            'contact_name': 'edit-submitted-contact-name',
            'telnr_nabestaande': 'edit-submitted-contact-phone',
        },
        organization: {
            'email': 'edit-submitted-contact-email',
            'confirm_email': 'edit-submitted-contact-email-confirm',
            'question': {
                id: 'edit-submitted-vraag-over',
                value: 1
            },
        },
    },
    bndestem: {
        deceased_person: {
            'address': 'edit-submitted-adress',
            'house_number': 'edit-submitted-huisnummer',
            'house_number_extra': 'edit-submitted-huisnummertoevoeging',
            'postal_code': 'edit-submitted-postcode',
            'city': 'edit-submitted-plaatsnaam',
            'explanation': 'edit-submitted-contact-message',
        },
        user: {
            'contact_name': 'edit-submitted-contact-name',
            'telnr_nabestaande': 'edit-submitted-contact-phone',
        },
        organization: {
            'email': 'edit-submitted-contact-email',
            'confirm_email': 'edit-submitted-contact-email-confirm',
            'question': {
                id: 'edit-submitted-vraag-over',
                value: 1
            },
        }
    },
    brabantsdagblad: {
        deceased_person: {
            'address': 'edit-submitted-adress',
            'house_number': 'edit-submitted-huisnummer',
            'house_number_extra': 'edit-submitted-huisnummertoevoeging',
            'postal_code': 'edit-submitted-postcode',
            'city': 'edit-submitted-plaatsnaam',
            'explanation': 'edit-submitted-contact-message',
        },
        user: {
            'contact_name': 'edit-submitted-contact-name',
            'telnr_nabestaande': 'edit-submitted-contact-phone',
        },
        organization: {
            'email': 'edit-submitted-contact-email',
            'confirm_email': 'edit-submitted-contact-email-confirm',
            'question': {
                id: 'edit-submitted-vraag-over',
                value: 1
            },
        },
    },
    parool: {
        deceased_person: {
            'address': 'edit-submitted-adress',
            'house_number': 'edit-submitted-huisnummer',
            'house_number_extra': 'edit-submitted-huisnummertoevoeging',
            'postal_code': 'edit-submitted-postcode',
            'city': 'edit-submitted-plaatsnaam',
            'explanation': 'edit-submitted-contact-message',
        },
        user: {
            'contact_name': 'edit-submitted-contact-name',
            'telnr_nabestaande': 'edit-submitted-contact-phone',
        },
        organization: {
            'email': 'edit-submitted-contact-email',
            'confirm_email': 'edit-submitted-contact-email-confirm',
            'question': {
                id: 'edit-submitted-vraag-over',
                value: 1
            },
        },
    },
    destentoor: {
        deceased_person: {
            'address': 'edit-submitted-adress',
            'house_number': 'edit-submitted-huisnummer',
            'house_number_extra': 'edit-submitted-huisnummertoevoeging',
            'postal_code': 'edit-submitted-postcode',
            'city': 'edit-submitted-plaatsnaam',
            'explanation': 'edit-submitted-contact-message',
        },
        user: {
            'contact_name': 'edit-submitted-contact-name',
            'telnr_nabestaande': 'edit-submitted-contact-phone',
        },
        organization: {
            'email': 'edit-submitted-contact-email',
            'confirm_email': 'edit-submitted-contact-email-confirm',
            'question': {
                id: 'edit-submitted-vraag-over',
                value: 1
            },
        },
    },
    volkskrant: {
        deceased_person: {
            'address': 'edit-submitted-adress',
            'house_number': 'edit-submitted-huisnummer',
            'house_number_extra': 'edit-submitted-huisnummertoevoeging',
            'postal_code': 'edit-submitted-postcode',
            'city': 'edit-submitted-plaatsnaam',
            'explanation': 'edit-submitted-contact-message',
        },
        user: {
            'contact_name': 'edit-submitted-contact-name',
            'telnr_nabestaande': 'edit-submitted-contact-phone',
        },
        organization: {
            'email': 'edit-submitted-contact-email',
            'confirm_email': 'edit-submitted-contact-email-confirm',
            'question': {
                id: 'edit-submitted-vraag-over',
                value: 1
            },
        },
    },
    gelderlander: {
        deceased_person: {
            'address': 'edit-submitted-adress',
            'house_number': 'edit-submitted-huisnummer',
            'house_number_extra': 'edit-submitted-huisnummertoevoeging',
            'postal_code': 'edit-submitted-postcode',
            'city': 'edit-submitted-plaatsnaam',
            'explanation': 'edit-submitted-contact-message',
        },
        user: {
            'contact_name': 'edit-submitted-contact-name',
            'telnr_nabestaande': 'edit-submitted-contact-phone',
        },
        organization: {
            'email': 'edit-submitted-contact-email',
            'confirm_email': 'edit-submitted-contact-email-confirm',
            'question': {
                id: 'edit-submitted-vraag-over',
                value: 1
            },
        },
    },
    eindhovensdagblad: {
        deceased_person: {
            'address': 'edit-submitted-adress',
            'house_number': 'edit-submitted-huisnummer',
            'house_number_extra': 'edit-submitted-huisnummertoevoeging',
            'postal_code': 'edit-submitted-postcode',
            'city': 'edit-submitted-plaatsnaam',
            'explanation': 'edit-submitted-contact-message',
        },
        user: {
            'contact_name': 'edit-submitted-contact-name',
            'telnr_nabestaande': 'edit-submitted-contact-phone',
        },
        organization: {
            'email': 'edit-submitted-contact-email',
            'confirm_email': 'edit-submitted-contact-email-confirm',
            'question': {
                id: 'edit-submitted-vraag-over',
                value: 1
            },
        },
    },
    pzc: {
        deceased_person: {
            'address': 'edit-submitted-adress',
            'house_number': 'edit-submitted-huisnummer',
            'house_number_extra': 'edit-submitted-huisnummertoevoeging',
            'postal_code': 'edit-submitted-postcode',
            'city': 'edit-submitted-plaatsnaam',
            'explanation': 'edit-submitted-contact-message',
        },
        user: {
            'contact_name': 'edit-submitted-contact-name',
            'telnr_nabestaande': 'edit-submitted-contact-phone',
        },
        organization: {
            'email': 'edit-submitted-contact-email',
            'confirm_email': 'edit-submitted-contact-email-confirm',
            'question': {
                id: 'edit-submitted-vraag-over',
                value: 1
            },
        },
    },
    tubantia: {
        deceased_person: {
            'address': 'edit-submitted-adress',
            'house_number': 'edit-submitted-huisnummer',
            'house_number_extra': 'edit-submitted-huisnummertoevoeging',
            'postal_code': 'edit-submitted-postcode',
            'city': 'edit-submitted-plaatsnaam',
            'explanation': 'edit-submitted-contact-message',
        },
        user: {
            'contact_name': 'edit-submitted-contact-name',
            'telnr_nabestaande': 'edit-submitted-contact-phone',
        },
        organization: {
            'email': 'edit-submitted-contact-email',
            'confirm_email': 'edit-submitted-contact-email-confirm',
            'question': {
                id: 'edit-submitted-vraag-over',
                value: 1
            },
        },
    },
    dpg_magazines: {
        deceased_person:{
            'first_name': 'klntn-voornaam',
            'prefixes': 'klntn-tussenvoegsel',
            'last_name': 'klntn-achternaam',
            'address': 'klntn-straatnaam',
            'house_number': 'klntn-huisnummer',
            'house_number_extra': 'klntn-toevoeging',
            'postal_code': 'klntn-postcode',
            'city': 'klntn-woonplaats',
            'explanation': 'klntn-message',
        },
        user: {
            'telnr_nabestaande': 'klntn-telefoonnummer',
        },
        organization:{
            'name': 'klntn-form-product',
            'email': 'klntn-email',
            'confirm_email': 'klntn-email-controle',
        },
        'task_type': '',
    },
    trouw: {
        deceased_person: {
            'address': 'edit-submitted-adress',
            'house_number': 'edit-submitted-huisnummer',
            'house_number_extra': 'edit-submitted-huisnummertoevoeging',
            'postal_code': 'edit-submitted-postcode',
            'city': 'edit-submitted-plaatsnaam',
            'explanation': 'edit-submitted-contact-message',
        },
        user: {
            'contact_name': 'edit-submitted-contact-name',
            'telnr_nabestaande': 'edit-submitted-contact-phone',
        },
        organization: {
            'email': 'edit-submitted-contact-email',
            'confirm_email': 'edit-submitted-contact-email-confirm',
            'question': {
                id: 'edit-submitted-vraag-over',
                value: 1
            },
        },
    },
    telegraaf: {
        organization : {
            'email': 'id_contact_value_email',
            'selectable': {
                id: 'id_subject',
                value: '11'
            },
        },
        user : {
            'telnr_nabestaande': 'id_contact_value_phone',
        },
        deceased_person: {
            'explanation': 'id_text',
            'gender': 'id_gender',
            'initials': 'initials',
            'prefixes': 'insertion',
            'last_name': 'last_name',
            'postal_code': 'postcode',
            'house_number': 'house_number',
            'house_number_extra': 'house_number_extension',
            'address':'id_street_name',
            'city':'id_city',
        }
    },
    prive: {
        organization : {
            'email': 'id_contact_value_email',
            'selectable': {
                id: 'id_subject',
                value: '20'
            },
        },
        user : {
            'telnr_nabestaande': 'id_contact_value_phone',
        },
        deceased_person: {
            'explanation': 'id_text',
            'gender': 'id_gender',
            'initials': 'initials',
            'prefixes': 'insertion',
            'last_name': 'last_name',
            'postal_code': 'postcode',
            'house_number': 'house_number',
            'house_number_extra': 'house_number_extension',
            'address':'id_street_name',
            'city':'id_city',
        }
    },
    noordhollandsdagblad: {
        organization: {
            'email': 'id_contact_value_email',
            'selectable': {
                id: 'id_subject',
                value: '2'
            },
        },
        user: {
            'telnr_nabestaande': 'id_contact_value_phone',
        },
        deceased_person: {
            'explanation': 'id_text',
            'gender': 'id_gender',
            'initials': 'initials',
            'prefixes': 'insertion',
            'last_name': 'last_name',
            'postal_code': 'postcode',
            'house_number': 'house_number',
            'house_number_extra': 'house_number_extension',
            'address':'id_street_name',
            'city':'id_city',
        }
    },
    leidschdagblad: {
        organization: {
            'email': 'id_contact_value_email',
            'selectable': {
                id: 'id_subject',
                value: '2'
            },
        },
        user: {
            'telnr_nabestaande': 'id_contact_value_phone',
        },
        deceased_person: {
            'explanation': 'id_text',
            'gender': 'id_gender',
            'initials': 'initials',
            'prefixes': 'insertion',
            'last_name': 'last_name',
            'postal_code': 'postcode',
            'house_number': 'house_number',
            'house_number_extra': 'house_number_extension',
            'address':'id_street_name',
            'city':'id_city',
        }
    },
    gooieneemlander: {
        organization: {
            'email': 'id_contact_value_email',
            'selectable': {
                id: 'id_subject',
                value: '2'
            },
        },
        user: {
            'telnr_nabestaande': 'id_contact_value_phone',
        },
        deceased_person: {
            'explanation': 'id_text',
            'gender': 'id_gender',
            'initials': 'initials',
            'prefixes': 'insertion',
            'last_name': 'last_name',
            'postal_code': 'postcode',
            'house_number': 'house_number',
            'house_number_extra': 'house_number_extension',
            'address':'id_street_name',
            'city':'id_city',
        }
    },
    hartstichting: {
        user: {
            'gender': 'BizForm_Geslacht-',
            'first_name': 'BizForm_Voornaam',
            'last_name': 'BizForm_Achternaam',
        },
        organization: {
            'email': 'BizForm_E_mailadres',
        },
        deceased_person: {
            'gender': 'BizForm_Geslacht_donateur-',
            'first_name': 'BizForm_Voornaam_donateur',
            'last_name': 'BizForm_Achternaam_donateur',
            'address': 'BizForm_Straatnaam',
            'house_number': 'BizForm_Huisnummer',
            'postal_code': 'BizForm_Postcode',
            'city': 'BizForm_Woonplaats',
            'iban':'BizForm_IBAN',
        },
    },
    centraalbeheer: {
        user: {
            'gender': 'fxb.81e10b06-39db-45a5-9631-9a4d0a866db2.Fields[534d5876-868b-455a-a001-42e0fc8ffd86].Value',
            'initials': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_df01adc7-3fe5-42c0-8c14-c24237bfa378__Initials',
            'prefixes': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_df01adc7-3fe5-42c0-8c14-c24237bfa378__Insertion',
            'last_name': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_df01adc7-3fe5-42c0-8c14-c24237bfa378__LastName',
            'relation': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_68a31b78-40e1-499c-ab28-a53981980135__Value',
            'address': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_74436f31-68c9-47c9-ab90-b03918f235f8__Value',
            'house_number': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_04e19bd0-0df9-4ca2-8fb6-a5bc3776b203__Value',
            'house_number_extra': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_5b7ea020-79aa-4b7b-94ca-f44e81105737__Value',
            'postal_code': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_25e8a21b-143b-4ffc-8576-7a53c8020ff5__Value',
            'city': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_2813d3c4-1d2e-4f21-919c-d2c958c5d966__Value',
            'telnr_nabestaande': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_ec301ebb-2503-472b-bd1e-854136c3fda4__Value',
            'email': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_e98bf22a-25e8-46fc-93e0-cb2bbb9d3047__Value',
        },
        deceased_person: {
            'gender': 'fxb.81e10b06-39db-45a5-9631-9a4d0a866db2.Fields[48dc3f15-dd30-4851-b3ec-42df3c4f0ace].Value',
            'initials': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_e0a82f1b-1a8c-46cb-9548-ef6acbdbb9fa__Initials',
            'prefixes': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_e0a82f1b-1a8c-46cb-9548-ef6acbdbb9fa__Insertion',
            'last_name': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_e0a82f1b-1a8c-46cb-9548-ef6acbdbb9fa__LastName',
            'birth_date': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_e12a1470-df8a-4fcb-bd80-6e9f00f4b3d5__Value',
            'died_date': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_58dc4705-d603-4e45-8fb8-b5f828e89968__Value',
            'address': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_88dd7627-ecc2-4736-a758-ed461ab36103__Value',
            'house_number': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_34f7372e-a54f-4b4c-97cb-1226cdb15a01__Value',
            'house_number_extra': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_b31aa6ef-4a97-4649-8aee-6d61e5cf97a4__Value',
            'postal_code': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_86a46ae7-3689-4a34-8787-02fb6e3fe031__Value',
            'city': 'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_bd5d681c-183d-4853-9df3-629a572e5b7f__Value',
            'product':'fxb_81e10b06-39db-45a5-9631-9a4d0a866db2_Fields_64f32279-28cc-4829-a221-798bb38e5453__Value',
        },
    },
    natuurmonumenten: {
        deceased_person: {
            'gender': 'edit-actor-salutation-',
            'first_name': 'edit-actor-firstname',
            'last_name': 'edit-actor-full-lastname',
            'postal_code': 'edit-actor-address-address-postcode',
            'house_number': 'edit-actor-address-address-number',
            'house_number_extra': 'edit-actor-address-address-number-add',
            'birth_date': 'edit-actor-date-of-birth',
        },
        user : {
            'email': 'edit-actor-email',
            'telnr_nabestaande': 'edit-actor-phone',
        },
    },
    rabobank: {
        deceased_person: {
            'died_date': 0,
            'initials': 0,
            'prefixes': 1,
            'last_name': 2,
            'birth_date': 1,
            'iban': 3,
            'postal_code': 4,
            'house_number': 5,
            'house_number_extra': 6,
        },
    },
    linkedin: {
        user: {
            'first_name': 'dyna-firstname',
            'last_name': 'dyna-lastname',
            'contact_name': 'dyna-signature',
        },
        organization: {
            'email': 'dyna-email',
        },
        deceased_person: {
            'contact_name': 'dyna-deceased_name',
            'linkedin_link': 'dyna-deceased_profile_url',
            'relation': 'dyna-relationship_to_deceased-0',
            'email': 'dyna-deceased_email_addr',
            'died_date': 'dyna-date_deceased',
            'proof': 'dyna-obit_or_article',
        }
    }
};

export default fieldMapping
