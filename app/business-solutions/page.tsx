"use client";
import { useState, useRef } from 'react'
import Image from "next/image";
import Link from "next/link";
import { isValidPhoneNumber } from "libphonenumber-js";

const services = [
  {
    id: 1,
    icon: "/Images/BusinessSolutions/phone.png",
    title: "Business Mobile Solutions",
    description:
      "Scalable mobile connectivity delivered via the EE network through authorised wholesale partnership.",
    features: [
      "Business SIM plans",
      "Device & accessory options",
      "Centralised billing",
      "Multi-user management",
    ],
    linkText: "View Business Mobile",
    linkUrl: "/ee-mobile-plans",
  },
  {
    id: 2,
    icon: "/Images/BusinessSolutions/wifi.png",
    title: "Business Broadband & Fibre",
    description:
      "Business-grade broadband provisioned via BT Wholesale infrastructure with structured onboarding and support.",
    features: [
      "Business Broadband",
      "Full Fibre",
      "Static IP options",
      "Structured installation",
    ],
    linkText: "View Business Broadband",
    linkUrl: "/bt-broadband",
  },
  {
    id: 3,
    icon: "/Images/BusinessSolutions/call.png",
    title: "Business Voice & Numbering",
    description:
      "Professional voice services and UK number management for growing organisations.",
    features: [
      "Business Landlines",
      "Hosted Voice",
      "Numbering & Porting",
    ],
    linkText: "View Business Voice",
    linkUrl: "/landlines",
  },
];
const useCases = [
  {
    id: "01",
    title: "Remote & Hybrid Teams",
    points: [
      "Mobile + Broadband + Hosted Voice",
      "Centralised billing across all services",
      "Structured onboarding for distributed teams",
    ],
    buttonText: "Speak To Business Team",
    linkUrl: "/contact",
  },
  {
    id: "02",
    title: "Multi-Site Businesses",
    points: [
      "Number portability management across all sites",
      "Coordinated installations and provisioning",
      "Single account oversight and support",
    ],
    buttonText: "Speak To Business Team",
    linkUrl: "/contact",
  },
  {
    id: "03",
    title: "Growing SMEs",
    points: [
      "Flexible contract structures that scale with you",
      "Scalable services as headcount grows",
      "Managed service transitions with minimal disruption",
    ],
    buttonText: "Speak To Business Team",
    linkUrl: "/contact",
  },
];
const serviceDeliveryData = [
  {
    id: 1,
    icon: "/Images/BusinessSolutions/clock.png",
    title: "Provisioning & Activation",
    description:
      "Defined onboarding workflows aligned with wholesale validation processes to ensure timely, accurate service activation.",
  },
  {
    id: 2,
    icon: "/Images/BusinessSolutions/mobile.png",
    title: "Numbering & Port Management",
    description:
      "Structured number allocation and porting governed by UK industry standards, with transparent tracking throughout the process.",
  },
  {
    id: 3,
    icon: "/Images/BusinessSolutions/account.png",
    title: "Ongoing Account Support",
    description:
      "UK-based support with defined escalation pathways and coordinated issue management throughout the service relationship.",
  },
];

const commitments = [
  {
    id: 1,
    text: "Defined first-response targets during UK business hours for all service queries.",
  },
  {
    id: 2,
    text: "Structured escalation pathways for service-impacting issues with clear ownership at each stage.",
  },
  {
    id: 3,
    text: "Fault coordination with wholesale infrastructure providers on your behalf.",
  },
  {
    id: 4,
    text: "Account oversight for business customers including proactive service monitoring.",
  },
];

const infrastructureContext = [
  {
    id: 1,
    text: "Services delivered via authorised wholesale infrastructure including BT Wholesale and the EE network.",
  },
  {
    id: 2,
    text: "Provisioning governed by established carrier processes with defined timelines.",
  },
  {
    id: 3,
    text: "Porting aligned with UK industry standards and Ofcom guidelines.",
  },
];

const serviceLevels = [
  {
    id: 1,
    service: "Business Mobile",
    response: "Within 1 business day*",
  },
  {
    id: 2,
    service: "Business Broadband",
    response: "Within 1 business day*",
  },
  {
    id: 3,
    service: "Voice & Porting",
    response: "Within 1 business day*",
  },
];

const portalFeatures = [
  {
    id: 1,
    icon: "/Images/BusinessSolutions/service.png",
    title: "Service Dashboard",
    description:
      "Consolidated view of mobile, broadband and voice services.",
  },
  {
    id: 2,
    icon: "/Images/BusinessSolutions/billing.png",
    title: "Billing & Invoices",
    description:
      "Invoices, payment history and downloadable statements.",
  },
  {
    id: 3,
    icon: "/Images/BusinessSolutions/numbering.png",
    title: "Numbering & Port Requests",
    description:
      "Submit and track allocation and porting workflows.",
  },
  {
    id: 4,
    icon: "/Images/BusinessSolutions/support.png",
    title: "Support Case Management",
    description:
      "Create cases, track status and view escalation path.",
  },
];

const portalStats = [
  {
    id: 1,
    value: "24",
    label: "Active Sims",
  },
  {
    id: 2,
    value: "3",
    label: "Broadband Lines",
  },
  {
    id: 3,
    value: "6",
    label: "Voice Lines",
  },
];

const portalActivities = [
  {
    id: 1,
    label: "Business Mobile — EE Network",
    status: "Active",
    statusType: "success",
  },
  {
    id: 2,
    label: "Full Fibre 500Mb — BT Wholesale",
    status: "Active",
    statusType: "success",
  },
  {
    id: 3,
    label: "Number Port Request — 020 XXXX",
    status: "In Progress",
    statusType: "warning",
  },
  {
    id: 4,
    label: "Support Case #4821 — Broadband",
    status: "Under Review",
    statusType: "info",
  },
];

const businessPrinciples = [
  {
    id: 1,
    icon: "/Images/BusinessSolutions/authorised.png",
    title: "Authorised Wholesale Partnerships",
    description:
      "Reseller of BT Wholesale services with access to established UK infrastructure.",
  },
  {
    id: 2,
    icon: "/Images/BusinessSolutions/pricing.png",
    title: "Transparent Pricing & Terms",
    description:
      "Clear tariff structures with no hidden charges and standardised contract terms.",
  },
  {
    id: 3,
    icon: "/Images/BusinessSolutions/structured.png",
    title: "Structured Service Governance",
    description:
      "Documented processes, defined SLAs and accountable escalation pathways.",
  },
  {
    id: 4,
    icon: "/Images/BusinessSolutions/support.png",
    title: "Dedicated Business Support",
    description:
      "UK-based support team with defined response targets for business accounts.",
  },
];
const industries = [
  {
    id: 1,
    icon: "/Images/BusinessSolutions/icon1.png",
    title: "Professional Services",
    description: "Law, finance, consulting & advisory",
  },
  {
    id: 2,
    icon: "/Images/BusinessSolutions/icon2.png",
    title: "Retail & Hospitality",
    description: "Multi-site connectivity & POS",
  },
  {
    id: 3,
    icon: "/Images/BusinessSolutions/icon3.png",
    title: "Healthcare",
    description: "Reliable connectivity for clinics & practices",
  },
  {
    id: 4,
    icon: "/Images/BusinessSolutions/icon4.png",
    title: "Trades & Construction",
    description: "Mobile-first solutions for site teams",
  },
  {
    id: 5,
    icon: "/Images/BusinessSolutions/icon5.png",
    title: "Logistics",
    description: "Fleet connectivity & tracking solutions",
  },
  {
    id: 6,
    icon: "/Images/BusinessSolutions/icon6.png",
    title: "Remote-First Organisations",
    description: "Distributed teams & home-working setups",
  },
];

const services2 = [
  { label: "Business Mobile", value: "business_mobile" },
  { label: "Business Broadband", value: "business_broadband" },
  { label: "Hosted Voice", value: "hosted_voice" },
  { label: "Full Fibre", value: "full_fibre" },
  { label: "Number Porting", value: "number_porting" },
  { label: "Managed Connectivity", value: "managed_connectivity" },
];

const countries = [
  { code: "UK", name: "United Kingdom", dialCode: "+44" },
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "IT", name: "Italy", dialCode: "+39" },
  { code: "ZA", name: "South Africa", dialCode: "+27" },
];

export default function page() {

  const formRef = useRef<HTMLElement>(null);

const scrollToForm = () => {
  formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};

  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
  full_name: "",
  company: "",
  email: "",
  phone: "",
  country: countries[0].name,
  service_interest: "",
  notes: "",
  consent: false,
});

  type FormErrors = {
    full_name: string;
    company: string;
    email: string;
    phone: string;
    service_interest: string;
    notes: string;
    consent: string;
  };

  const emptyErrors: FormErrors = {
    full_name: "",
    company: "",
    email: "",
    phone: "",
    service_interest: "",
    notes: "",
    consent: "",
  };

  const [errors, setErrors] = useState<FormErrors>(emptyErrors);

  // Tracks which fields the user has actually interacted with, so we don't
  // show error messages before they've had a chance to type anything.
  const [touched, setTouched] = useState<Record<keyof FormErrors, boolean>>({
    full_name: false,
    company: false,
    email: false,
    phone: false,
    service_interest: false,
    notes: false,
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  // ---- Field-level validators (all logic lives here, independent of any
  // native HTML "required"/"type" browser validation) ----

  const validateFullName = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "Full name is required";
    if (trimmed.length < 2) return "Enter your full name";
    if (!/^[a-zA-Z\u00C0-\u017F\s'-]+$/.test(trimmed)) {
      return "Name can only contain letters, spaces, hyphens and apostrophes";
    }
    return "";
  };

  const validateCompany = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "Company name is required";
    if (trimmed.length < 2) return "Enter a valid company name";
    return "";
  };

  // Proper email validation: structural check (RFC-5322 subset) plus
  // sanity checks a simple `type="email"` input never catches.
  const validateEmail = (value: string) => {
    const email = value.trim();

    if (!email) return "Email address is required";
    if (email.length > 254) return "Email address is too long";

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

    if (!emailRegex.test(email)) return "Enter a valid email address";

    const [local, domain] = email.split("@");
    if (local.length > 64) return "Email address is invalid";
    if (domain.split(".").some((part) => part.length === 0)) {
      return "Enter a valid email address";
    }
    if (/\.\./.test(email)) return "Email address cannot contain '..'";

    return "";
  };

  // Real phone number validation using libphonenumber-js — checks the
  // number against the actual numbering plan for the selected country
  // (correct length, valid area/operator prefixes, etc.), not just a
  // digit-count regex.
  const validatePhone = (value: string, countryCode: string) => {
  const phone = value.trim();

  if (!phone) return "Phone number is required";

  // Count actual digits (ignore spaces/formatting)
  const digitsOnly = phone.replace(/\D/g, "");
  if (digitsOnly.length > 15) return "Phone number cannot exceed 15 digits";
  if (digitsOnly.length < 6) return "Phone number is too short";

  try {
    if (!isValidPhoneNumber(phone, countryCode as any)) {
      return `Enter a valid ${countryCode} phone number`;
    }
  } catch {
    return "Enter a valid phone number";
  }

  return "";
};

const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // Allow only digits and spaces; cap at 15 digits
  const raw = e.target.value.replace(/[^\d\s]/g, "");
  const digitCount = raw.replace(/\D/g, "").length;
  if (digitCount > 15) return; // ignore input beyond 15 digits

  setFormData((prev) => ({ ...prev, phone: raw }));

  if (touched.phone) {
    setErrors((prev) => ({
      ...prev,
      phone: validatePhone(raw, selectedCountry.code),
    }));
  }
};

  const validateServiceInterest = (value: string) => {
    if (!value) return "Please select a service";
    return "";
  };

  const validateNotes = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "Please add a short note about your requirements";
    if (trimmed.length < 10) return "Please provide a bit more detail (min 10 characters)";
    return "";
  };

  const validateConsent = (value: boolean) => {
    if (!value) return "You must agree before submitting this form";
    return "";
  };

  // Runs every validator and returns a fresh errors object
  const validateAll = (): FormErrors => {
    return {
      full_name: validateFullName(formData.full_name),
      company: validateCompany(formData.company),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone, selectedCountry.code),
      service_interest: validateServiceInterest(formData.service_interest),
      notes: validateNotes(formData.notes),
      consent: validateConsent(formData.consent),
    };
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const fieldName = name as keyof FormErrors;

    const nextValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));

    // Only re-validate live once the field has been touched, so errors
    // don't appear before the user has interacted with it
    if (touched[fieldName]) {
      let message = "";
      switch (fieldName) {
        case "full_name":
          message = validateFullName(nextValue as string);
          break;
        case "company":
          message = validateCompany(nextValue as string);
          break;
        case "email":
          message = validateEmail(nextValue as string);
          break;
        case "phone":
          message = validatePhone(nextValue as string, selectedCountry.code);
          break;
        case "service_interest":
          message = validateServiceInterest(nextValue as string);
          break;
        case "notes":
          message = validateNotes(nextValue as string);
          break;
        case "consent":
          message = validateConsent(nextValue as boolean);
          break;
      }
      setErrors((prev) => ({ ...prev, [fieldName]: message }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name } = e.target;
    const fieldName = name as keyof FormErrors;

    setTouched((prev) => ({ ...prev, [fieldName]: true }));

    let message = "";
    switch (fieldName) {
      case "full_name":
        message = validateFullName(formData.full_name);
        break;
      case "company":
        message = validateCompany(formData.company);
        break;
      case "email":
        message = validateEmail(formData.email);
        break;
      case "phone":
        message = validatePhone(formData.phone, selectedCountry.code);
        break;
      case "service_interest":
        message = validateServiceInterest(formData.service_interest);
        break;
      case "notes":
        message = validateNotes(formData.notes);
        break;
      case "consent":
        message = validateConsent(formData.consent);
        break;
    }
    setErrors((prev) => ({ ...prev, [fieldName]: message }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const freshErrors = validateAll();
    setErrors(freshErrors);
    setTouched({
      full_name: true,
      company: true,
      email: true,
      phone: true,
      service_interest: true,
      notes: true,
      consent: true,
    });

    const hasErrors = Object.values(freshErrors).some(
      (message) => message !== ""
    );

    if (hasErrors) {
      // Focus the first invalid field for accessibility
      const firstErrorField = Object.keys(freshErrors).find(
        (key) => freshErrors[key as keyof FormErrors] !== ""
      );
      if (firstErrorField) {
        const el = document.querySelector<HTMLElement>(
          `[name="${firstErrorField}"]`
        );
        el?.focus();
      }
      return;
    }

    setLoading(true);

    try {
      const payload = {
        full_name: formData.full_name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        service_interest: formData.service_interest,
        notes: formData.notes,
        consent: formData.consent,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/business-solutions/submit/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Submitted successfully");

        setFormData({
          full_name: "",
          company: "",
          email: "",
          phone: "",
          country: countries[0].name,
          service_interest: "",
          notes: "",
          consent: false,
        });

        setSelectedCountry(countries[0]);
        setErrors(emptyErrors);
        setTouched({
          full_name: false,
          company: false,
          email: false,
          phone: false,
          service_interest: false,
          notes: false,
          consent: false,
        });

      } else {
        alert("Something went wrong");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* Hero section */}
      <section className="w-full bg-white dark:bg-[#0F172A] py-10 lg:py-16 transition-colors duration-300">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* LEFT CONTENT */}
      <div className="order-2 lg:order-1">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 dark:bg-pink-500/10 px-4 py-2 mb-6">
          <span className="w-5 h-5 rounded-full text-center flex items-center justify-center ">
            <Image src="/Images/BusinessSolutions/hero-tic.png" alt="" width={20} height={20} />
          </span>
          <span className="text-xs font-semibold tracking-wide uppercase text-pink-600 dark:text-pink-400">
            Business Solutions
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold text-[#1B1734] dark:text-white max-w-xl">
          Business Connectivity.
          <br />
          <span className="text-pink-600 dark:text-pink-400">
            Structured for
          </span>
          <br />
          <span className="text-pink-600 dark:text-pink-400">
            Performance.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-base font-medium leading-8 text-gray-600 dark:text-slate-300 max-w-lg">
          Mobile, broadband and voice solutions delivered through
          authorised wholesale infrastructure including BT Wholesale
          and supported by Zoiko Telecom's structured service
          management.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          {/* <Link href="/ee-mobile-plans" passHref> */}
          <button
          onClick={scrollToForm}
            className="
              h-14 px-8 rounded-full
              text-xs md:text-sm
              bg-gradient-to-r from-pink-600 to-fuchsia-500
              text-white font-semibold
              shadow-lg shadow-pink-500/20
              hover:scale-[1.02]
              transition-all duration-300
            "
          >
            <span>
                <Image src="/Images/BusinessSolutions/hero-mail.png" alt="" width={20} height={20} className="inline-block mr-2" />
            </span>
            Request Business Consultation
          </button>
          {/* </Link> */}

          <Link href="/contact" passHref>
          <button
          
            className="
              h-14 px-8 rounded-full
              text-xs md:text-sm
              border border-fuchsia-500
              text-fuchsia-600 dark:text-fuchsia-400
              font-semibold
              hover:bg-fuchsia-50
              dark:hover:bg-fuchsia-500/10
              transition-all duration-300
            "
          >
            Explore Business Solutions
          </button>
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="order-1 lg:order-2">
        <div className="relative w-full">
          
          {/* Single Whole Image */}
          <Image
            src="/Images/BusinessSolutions/business-solutions.webp"
            alt="Business Connectivity"
            width={600}
            height={400}
            className="
              w-full
              h-auto
              object-cover
              rounded-[28px]
              shadow-2xl
            "
          />
        </div>
      </div>
    </div>

    {/* Bottom Features */}
    <div
      className=" max-w-5xl mx-auto
        mt-14 pt-8
        border-t border-gray-200 dark:border-white/10
        grid grid-cols-2 md:grid-cols-4 gap-6
      "
    >
      
      {/* Item */}
      <div className="flex items-center gap-3">
        <Image
          src="/Images/BusinessSolutions/hero-icon1.png"
          alt=""
          width={40}
          height={40}
          className="w-5 h-5 md:w-8 md:h-8 object-contain"
        />
        <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
          Authorised BT Wholesale Reseller
        </span>
      </div>

      {/* Item */}
      <div className="flex items-center gap-3">
        <Image
          src="/Images/BusinessSolutions/hero-icon2.png"
          alt=""
          width={40}
          height={40}
          className="w-5 h-5 md:w-8 md:h-8 object-contain"
        />
        <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
          EE Network Coverage
        </span>
      </div>

      {/* Item */}
      <div className="flex items-center gap-3">
        <Image
          src="/Images/BusinessSolutions/hero-icon3.png"
          alt=""
          width={40}
          height={40}
          className="w-5 h-5 md:w-8 md:h-8 object-contain"
        />
        <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
          Structured Provisioning
        </span>
      </div>

      {/* Item */}
      <div className="flex items-center gap-3">
        <Image
          src="/Images/BusinessSolutions/hero-icon4.png"
          alt=""
          width={40}
          height={40}
          className="w-5 h-5 md:w-8 md:h-8 object-contain"
        />
        <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
          UK-Based Support
        </span>
      </div>
    </div>
  </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-[#F7F5FA] dark:bg-[#0F172A] py-8 lg:py-16 transition-colors duration-300">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TOP CONTENT */}
    <div className="text-center max-w-3xl mx-auto">
      
      {/* Small Label */}
      <span
        className="
          inline-block
          text-[11px]
          tracking-[0.25em]
          uppercase
          font-semibold
          text-pink-600 dark:text-pink-400
          mb-5
        "
      >
        Solutions Architecture
      </span>

      {/* Heading */}
      <h2
        className="
          text-3xl sm:text-4xl lg:text-5xl
          font-extrabold
          tracking-tight
          text-[#1A1831]
          dark:text-white
        "
      >
        Comprehensive Business Services
      </h2>

      {/* Description */}
      <p
        className="
          mt-5
          text-base sm:text-lg
          leading-8
          text-gray-600 dark:text-slate-300
        "
      >
        Three integrated service pillars built on authorised wholesale
        infrastructure, tailored to your operational requirements.
      </p>
    </div>

    {/* CARDS */}
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {services.map((service) => (
        <div
          key={service.id}
          className="
            group
            bg-white dark:bg-[#111827]
            border border-[#E9E3F3] dark:border-white/10
            rounded-[24px]
            p-7
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            hover:shadow-pink-500/10
          "
        >

          {/* ICON */}
          <div
            className="
              w-14 h-14
              rounded-2xl
              bg-gradient-to-br
              from-pink-600
              to-fuchsia-500
              flex items-center justify-center
              shadow-lg shadow-pink-500/20
            "
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-14 h-14 object-contain"
            />
          </div>

          {/* TITLE */}
          <h3
            className="
              mt-6
              text-xl
              font-bold
              text-[#1A1831]
              dark:text-white
            "
          >
            {service.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              text-sm leading-7
              text-gray-600 dark:text-slate-300
            "
          >
            {service.description}
          </p>

          {/* FEATURES */}
          <ul className="mt-6 space-y-4">
            {service.features.map((feature, index) => (
              <li
                key={index}
                className="
                  flex items-center gap-3
                  text-sm
                  text-[#2A2645]
                  dark:text-slate-200
                  border-b border-gray-100 dark:border-white/5
                  pb-3
                "
              >
                <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>

          {/* LINK */}
          <Link href={service.linkUrl} passHref>
          <button
            className="
              mt-8
              inline-flex items-center gap-2
              text-sm font-semibold
              text-pink-600 dark:text-pink-400
              hover:gap-3
              transition-all duration-300
            "
          >
            {service.linkText}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          </Link>
        </div>
      ))}
    </div>
  </div>
      </section>

      {/* USE CASES */}
      <section className="w-full bg-[#F7F5FA] dark:bg-[#0F172A] py-8 lg:py-16 transition-colors duration-300">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TOP CONTENT */}
    <div className="max-w-3xl mx-auto text-center">

      {/* LABEL */}
      <span
        className="
          inline-block
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.25em]
          text-pink-600 dark:text-pink-400
          mb-5
        "
      >
        How Businesses Buy
      </span>

      {/* HEADING */}
      <h2
        className="
          text-3xl sm:text-4xl lg:text-5xl
          font-bold
          tracking-tight
          text-[#1A1831]
          dark:text-white
        "
      >
        Integrated Business Use Cases
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          mt-5
          text-base sm:text-lg
          leading-8
          text-gray-600 dark:text-slate-300
        "
      >
        Identify the right combination of services for your operational
        model without navigating product catalogues.
      </p>
    </div>

    {/* CARDS */}
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {useCases.map((item) => (
        <div
          key={item.id}
          className="
            group
            relative
            bg-white dark:bg-[#111827]
            border border-[#E9E3F3] dark:border-white/10
            rounded-[24px]
            p-8
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            hover:shadow-pink-500/10
          "
        >

          {/* NUMBER */}
          <div
            className="
              text-5xl
              font-extrabold
              leading-none
              bg-gradient-to-b
              from-pink-600
              to-fuchsia-500
              bg-clip-text
              text-transparent
            "
          >
            {item.id}
          </div>

          {/* TITLE */}
          <h3
            className="
              mt-6
              text-xl
              font-bold
              text-[#1A1831]
              dark:text-white
            "
          >
            {item.title}
          </h3>

          {/* POINTS */}
          <ul className="mt-6 space-y-5">
            {item.points.map((point, index) => (
              <li
                key={index}
                className="
                  flex items-start gap-3
                  text-sm leading-7
                  text-gray-600 dark:text-slate-300
                "
              >

                {/* SMALL LINE */}
                <span
                  className="
                    mt-3
                    w-3 h-[2px]
                    rounded-full
                    bg-pink-500
                    shrink-0
                  "
                />

                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* BUTTON */}
          <Link href={item.linkUrl} passHref>
          <button
            className="
              mt-10
              inline-flex items-center gap-2
              text-sm font-bold uppercase
              tracking-wide
              text-pink-600 dark:text-pink-400
              transition-all duration-300
              hover:gap-3
            "
          >
            {item.buttonText}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          </Link>
        </div>
      ))}
    </div>
  </div>
      </section>

      {/* Service Delivery */}
      <section className="w-full bg-[#F7F5FA] dark:bg-[#0F172A] py-8 lg:py-16 transition-colors duration-300">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TOP CONTENT */}
    <div className="max-w-3xl mx-auto text-center">

      {/* LABEL */}
      <span
        className="
          inline-flex items-center
          rounded-full
          border border-pink-200 dark:border-pink-500/20
          bg-pink-50 dark:bg-pink-500/10
          px-5 py-2
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.22em]
          text-pink-600 dark:text-pink-400
          mb-6
        "
      >
        Operational Maturity
      </span>

      {/* HEADING */}
      <h2
        className="
          text-3xl sm:text-4xl lg:text-5xl
          font-extrabold
          tracking-tight
          text-[#1A1831]
          dark:text-white
        "
      >
        Structured Service Delivery
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          mt-5
          text-base sm:text-lg
          leading-8
          text-gray-600 dark:text-slate-300
          max-w-2xl mx-auto
        "
      >
        Defined processes across every stage of your service lifecycle
        from provisioning through to ongoing account support.
      </p>
    </div>

    {/* CARDS */}
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {serviceDeliveryData.map((item) => (
        <div
          key={item.id}
          className="
            group
            bg-white dark:bg-[#111827]
            border border-[#E9E3F3] dark:border-white/10
            rounded-[24px]
            p-8
            text-center
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            hover:shadow-pink-500/10
          "
        >

          {/* ICON WRAPPER */}
          <div
            className="
              mx-auto
              w-16 h-16
              rounded-full
              bg-pink-50 dark:bg-pink-500/10
              flex items-center justify-center
              transition-all duration-300
              group-hover:scale-105
            "
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={40}
              height={40}
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* TITLE */}
          <h3
            className="
              mt-6
              text-xl
              font-bold
              text-[#1A1831]
              dark:text-white
            "
          >
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              text-sm sm:text-base
              leading-7
              text-gray-600 dark:text-slate-300
            "
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
      </section>

      {/* Commitments */}
      <section className="w-full bg-[#F7F5FA] dark:bg-[#0F172A] py-8 lg:py-16 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TOP CONTENT */}
    <div className="max-w-3xl mx-auto text-center">

      {/* LABEL */}
      <span
        className="
          inline-block
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.24em]
          text-pink-600 dark:text-pink-400
          mb-5
        "
      >
        Service Levels
      </span>

      {/* HEADING */}
      <h2
        className="
          text-3xl sm:text-4xl lg:text-5xl
          font-extrabold
          tracking-tight
          text-[#1A1831]
          dark:text-white
        "
      >
        Service Level & Reliability Framework
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          mt-5
          text-base sm:text-lg
          leading-8
          text-gray-600 dark:text-slate-300
          max-w-2xl mx-auto
        "
      >
        Zoiko Telecom operates a structured service management framework
        providing defined response targets and coordinated fault handling.
      </p>
    </div>

    {/* CONTENT GRID */}
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

      {/* LEFT COLUMN */}
      <div>

        {/* SECTION TITLE */}
        <h3
          className="
            text-sm
            font-bold
            uppercase
            tracking-[0.2em]
            text-pink-600 dark:text-pink-400
            mb-8
          "
        >
          Zoiko Service Commitments
        </h3>

        {/* LIST */}
        <div className="space-y-6">
          {commitments.map((item) => (
            <div
              key={item.id}
              className="
                flex items-start gap-4
                border-b border-[#E7E2F0] dark:border-white/10
                pb-5
              "
            >

              {/* TICK ICON */}
              <div
                className="
                  w-6 h-6
                  rounded-full
                  bg-gradient-to-br
                  from-pink-600
                  to-fuchsia-500
                  flex items-center justify-center
                  shrink-0
                  mt-1
                "
              >
                <Image
                  src="/Images/BusinessSolutions/hero-tic.png"
                  alt="tick"
                    width={20}  
                    height={20}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* TEXT */}
              <p
                className="
                  text-sm sm:text-base
                  leading-7
                  text-[#4B5563]
                  dark:text-slate-300
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <p
          className="
            mt-8
            md:mt-12
            text-sm
            md:text-base
            italic
            leading-6
            text-gray-500 dark:text-slate-400
          "
        >
          *Response targets apply to Zoiko Telecom service coordination.
          Resolution timelines may vary depending on wholesale provider
          processes.
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div>

        {/* SECTION TITLE */}
        <h3
          className="
            text-sm
            font-bold
            uppercase
            tracking-[0.2em]
            text-pink-600 dark:text-pink-400
            mb-8
          "
        >
          Infrastructure Context
        </h3>

        {/* LIST */}
        <div className="space-y-6">
          {infrastructureContext.map((item) => (
            <div
              key={item.id}
              className="
                flex items-start gap-4
                border-b border-[#E7E2F0] dark:border-white/10
                pb-5
              "
            >

              {/* TICK ICON */}
              <div
                className="
                  w-6 h-6
                  rounded-full
                  bg-gradient-to-br
                  from-pink-600
                  to-fuchsia-500
                  flex items-center justify-center
                  shrink-0
                  mt-1
                "
              >
                <Image
                  src="/Images/BusinessSolutions/hero-tic.png"
                  alt="tick"
                  width={20}
                  height={20}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* TEXT */}
              <p
                className="
                  text-sm sm:text-base
                  leading-7
                  text-[#4B5563]
                  dark:text-slate-300
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* TABLE */}
        <div
          className="
            mt-10
            overflow-hidden
            rounded-2xl
            border border-[#E7E2F0] dark:border-white/10
            bg-white dark:bg-[#111827]
          "
        >

          {/* TABLE HEADER */}
          <div
            className="
              grid grid-cols-2
              bg-[#5D0D91]
              text-white
              text-xs
              font-bold
              uppercase
              tracking-wide
            "
          >
            <div className="px-5 py-4">Service</div>
            <div className="px-5 py-4">Response Target</div>
          </div>

          {/* TABLE BODY */}
          {serviceLevels.map((item, index) => (
            <div
              key={item.id}
              className={`
                grid grid-cols-2
                text-sm
                ${
                  index !== serviceLevels.length - 1
                    ? "border-b border-[#E7E2F0] dark:border-white/10"
                    : ""
                }
              `}
            >
              <div className="px-5 py-4 text-[#4B5563] dark:text-slate-300">
                {item.service}
              </div>

              <div className="px-5 py-4 text-[#1A1831] dark:text-white font-medium">
                {item.response}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
      </section>

      {/* Business Account portal */}
       <section className="w-full bg-[#F7F5FA] dark:bg-[#0F172A] py-8 lg:py-16 transition-colors duration-300">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

      {/* LEFT CONTENT */}
      <div>

        {/* LABEL */}
        <span
          className="
            inline-block
            text-[11px]
            md:text-sm
            font-semibold
            uppercase
            tracking-[0.24em]
            text-pink-600 dark:text-pink-400
            mb-5
          "
        >
          Self-Service
        </span>

        {/* HEADING */}
        <h2
          className="
            text-3xl sm:text-4xl lg:text-5xl
            font-extrabold
            tracking-tight
            text-[#1A1831]
            dark:text-white
          "
        >
          Business Account Portal
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mt-5
            text-base sm:text-lg
            leading-8
            text-gray-600 dark:text-slate-300
            max-w-xl
          "
        >
          Manage your services, billing and number requests through a
          structured business interface designed for clarity and
          operational efficiency.
        </p>

        {/* FEATURE CARDS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

          {portalFeatures.map((item) => (
            <div
              key={item.id}
              className="
                bg-white dark:bg-[#111827]
                border border-[#E7E2F0] dark:border-white/10
                rounded-2xl
                p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-pink-500/10
              "
            >

              {/* ICON */}
              <div
                className="
                  w-12 h-12
                  rounded-xl
                  bg-gradient-to-br
                  from-pink-600
                  to-fuchsia-500
                  flex items-center justify-center
                  shadow-lg shadow-pink-500/20
                "
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                    width={20}
                    height={20}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-5
                  text-base
                  font-bold
                  text-[#1A1831]
                  dark:text-white
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-gray-600 dark:text-slate-300
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/#" passHref>
          <button
            className="
              h-14 px-8
              rounded-full
              bg-gradient-to-r
              from-pink-600
              to-fuchsia-500
              text-white
              font-semibold
              shadow-lg shadow-pink-500/20
              transition-all duration-300
              hover:scale-[1.02]
            "
          >
            Access Business Portal
          </button>
          </Link>

          <Link href="/contact" passHref>
          <button
            className="
              h-14 px-8
              rounded-full
              border border-fuchsia-500
              text-fuchsia-600 dark:text-fuchsia-400
              font-semibold
              hover:bg-fuchsia-50
              dark:hover:bg-fuchsia-500/10
              transition-all duration-300
            "
          >
            Request Portal Access
          </button>
          </Link>
        </div>

        {/* FOOTNOTE */}
        <p
          className="
            mt-6
            text-sm
            md:text-base
            leading-6
            text-gray-500 dark:text-slate-400
            max-w-xl
          "
        >
          Portal functionality may expand over time as Zoiko Telecom
          enhances its service management capabilities.
        </p>
      </div>

      {/* RIGHT DASHBOARD MOCKUP */}
      <div>

        <div
          className="
            overflow-hidden
            rounded-[24px]
            border border-[#2B2343]
            bg-[#19152C]
            shadow-2xl
          "
        >

          {/* TOP BAR */}
          <div
            className="
              h-14
              bg-[#4F0B7B]
              px-5
              flex items-center justify-between
            "
          >

            {/* DOTS */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
            </div>

            {/* TITLE */}
            <span
              className="
                text-[10px]
                uppercase
                pl-2
                tracking-[0.2em]
                text-white/70
                font-semibold
              "
            >
              Zoiko Business Portal
            </span>

            <div className="w-10" />
          </div>

          {/* BODY */}
          <div className="p-5 sm:p-6">

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {portalStats.map((item) => (
                <div
                  key={item.id}
                  className="
                    rounded-xl
                    border border-white/5
                    bg-white/5
                    p-4
                    text-center
                  "
                >

                  <div
                    className="
                      text-lg
                      md:text-2xl
                      font-extrabold
                      text-white
                    "
                  >
                    {item.value}
                  </div>

                  <div
                    className="
                      mt-2
                      text-[10px]
                      md:text-xs
                      uppercase
                      tracking-wide
                      text-white/50
                    "
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* ACTIVITY LIST */}
            <div className="mt-6 space-y-3">

              {portalActivities.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex items-center justify-between
                    gap-4
                    rounded-xl
                    border border-white/5
                    bg-white/5
                    px-4 py-3
                  "
                >

                  {/* LEFT */}
                  <div className="flex items-center gap-3 min-w-0">

                    {/* STATUS DOT */}
                    <span
                      className={`
                        w-2 h-2 rounded-full shrink-0
                        ${
                          item.statusType === "success"
                            ? "bg-green-400"
                            : item.statusType === "warning"
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                        }
                      `}
                    />

                    {/* LABEL */}
                    <p
                      className="
                        text-xs sm:text-sm
                        text-white/75
                        truncate
                      "
                    >
                      {item.label}
                    </p>
                  </div>

                  {/* STATUS BADGE */}
                  <span
                    className={`
                      shrink-0
                      rounded-full
                      px-3 py-1
                      text-[10px]
                      font-semibold
                      ${
                        item.statusType === "success"
                          ? "bg-green-500/20 text-green-300"
                          : item.statusType === "warning"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-blue-500/20 text-blue-300"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
       </section>

       {/* BUSINESS PRINCIPLES */}
       <section className="w-full bg-[#F7F5FA] dark:bg-[#0F172A] py-8 lg:py-16 transition-colors duration-300">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TOP CONTENT */}
    <div className="max-w-3xl mx-auto text-center">

      {/* LABEL */}
      <span
        className="
          inline-block
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.24em]
          text-pink-600 dark:text-pink-400
          mb-5
        "
      >
        Trust & Governance
      </span>

      {/* HEADING */}
      <h2
        className="
          text-2xl sm:text-4xl lg:text-5xl
          font-bold
          tracking-tight
          text-[#1A1831]
          dark:text-white
        "
      >
        Why Zoiko Telecom for Business
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          mt-5
          text-base sm:text-lg
          leading-8
          text-gray-600 dark:text-slate-300
          max-w-2xl mx-auto
        "
      >
        Four principles that define our approach to business service
        delivery — measured, accountable and transparent.
      </p>
    </div>

    {/* CARDS */}
    <div
      className="
        mt-14
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
      "
    >

      {businessPrinciples.map((item) => (
        <div
          key={item.id}
          className="
            group
            bg-white dark:bg-[#111827]
            border border-[#E7E2F0] dark:border-white/10
            rounded-[24px]
            px-6 py-8
            text-center
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            hover:shadow-pink-500/10
          "
        >

          {/* ICON WRAPPER */}
          <div
            className="
              mx-auto
              w-16 h-16
              rounded-full
              bg-gradient-to-br
              from-pink-600
              to-fuchsia-500
              flex items-center justify-center
              shadow-lg shadow-pink-500/20
              transition-all duration-300
              group-hover:scale-105
            "
          >

            {/* ICON IMAGE */}
            <Image
               width={64}
               height={64}
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* TITLE */}
          <h3
            className="
              mt-6
              text-base
              md:text-lg
              font-bold
              leading-7
              text-[#1A1831]
              dark:text-white
            "
          >
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              text-sm
              leading-7
              text-gray-600 dark:text-slate-300
            "
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
       </section>

       {/* INDUSTRIES */}
       <section ref={formRef} className="w-full bg-[#F7F5FA] dark:bg-[#0F172A] py-16 lg:py-24 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TOP CONTENT */}
    <div className="max-w-3xl mx-auto text-center">

      {/* LABEL */}
      <span
        className="
          inline-block
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.24em]
          text-pink-600 dark:text-pink-400
          mb-5
        "
      >
        Sectors We Serve
      </span>

      {/* HEADING */}
      <h2
        className="
          text-3xl sm:text-4xl lg:text-5xl
          font-extrabold
          tracking-tight
          text-[#1A1831]
          dark:text-white
        "
      >
        Industry Coverage
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          mt-5
          text-base sm:text-lg
          leading-8
          text-gray-600 dark:text-slate-300
          max-w-2xl mx-auto
        "
      >
        Connectivity solutions structured for the specific operational
        demands of your sector.
      </p>
    </div>

    {/* INDUSTRY GRID */}
    <div
      className="
        mt-14
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-5
      "
    >

      {industries.map((item) => (
  <Link
    key={item.id}
    href="/landline-business"
    className="
      group
      bg-white dark:bg-[#111827]
      border border-[#E7E2F0] dark:border-white/10
      rounded-2xl
      px-6 py-5
      flex items-center justify-between
      gap-5
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-xl
      hover:shadow-pink-500/10
    "
  >

    {/* LEFT CONTENT */}
    <div className="flex items-center gap-4 min-w-0">

      {/* ICON */}
      <div
        className="
          w-14 h-14
          rounded-2xl
          bg-pink-50 dark:bg-pink-500/10
          flex items-center justify-center
          shrink-0
          transition-all duration-300
          group-hover:scale-105
        "
      >
        <Image
          src={item.icon}
          alt={item.title}
          width={56}
          height={56}
          className="w-14 h-14 object-contain"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="min-w-0">
        <h3
          className="
            text-base sm:text-lg
            font-bold
            text-[#1A1831]
            dark:text-white
            truncate
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-1
            text-sm
            leading-6
            text-gray-600 dark:text-slate-300
          "
        >
          {item.description}
        </p>
      </div>
    </div>

    {/* RIGHT ARROW */}
    <span
      className="
        shrink-0
        text-pink-600 dark:text-pink-400
        transition-transform duration-300
        group-hover:translate-x-1
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </span>
  </Link>
))}
    </div>
  </div>
       </section>

       {/* Request a Quote form */}
       <section className="w-full bg-[#F7F5FA] dark:bg-[#0F172A] py-16 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* WRAPPER */}
        <div
          className="
            relative overflow-hidden
            rounded-[32px]
            bg-gradient-to-br
            from-[#7B1FA2]
            via-[#C2185B]
            to-[#EC1E8F]
            p-6 sm:p-10 lg:p-14
          "
        >

          {/* BACKGROUND GLOW */}
          <div
            className="
              absolute
              top-0 right-0
              w-[350px] h-[350px]
              bg-white/10
              blur-3xl
              rounded-full
            "
          />

          {/* GRID */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* LABEL */}
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-white/70
                "
              >
                Get Started
              </span>

              {/* HEADING */}
              <h2
                className="
                  mt-5
                  text-3xl sm:text-4xl
                  lg:text-5xl
                  font-bold
                  leading-tight
                  text-white
                  max-w-md
                "
              >
                Structure Your Connectivity with Confidence
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-6
                  text-base
                  leading-8
                  text-white/80
                  max-w-lg
                "
              >
                Speak with our business team to design a connectivity
                solution aligned with your operational and service-level
                requirements.
              </p>

              {/* BUTTON */}
              <Link href="/contact" passHref>
              <button
                className="
                  mt-10
                  py-3
                  md:py-6
                  px-6 md:px-8
                  rounded-full
                  text-sm md:text-base
                  border border-white/30
                  text-white
                  font-semibold
                  backdrop-blur-md
                  hover:bg-white/10
                  transition-all duration-300
                "
              >
                Contact Business Support
              </button>
              </Link>
            </div>

            {/* FORM */}
            <div>

              <form onSubmit={handleSubmit} noValidate className="  space-y-5">

                {/* ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* FULL NAME */}
                  <div>
                    <label
                      className="
                        block mb-2
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-white
                      "
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Jane Smith"
                      name="full_name"
                       value={formData.full_name}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       aria-invalid={!!errors.full_name}
                       aria-describedby="full_name-error"
                      className={`
                        w-full h-14
                        rounded-xl
                        border ${errors.full_name ? "border-red-400" : "border-white/20"}
                        bg-white dark:text-[#111827]
                        px-4
                        text-sm
                        outline-none
                        focus:border-white
                      `}
                    />
                    {errors.full_name && (
                      <p id="full_name-error" className="mt-2 text-xs font-medium text-red-100">
                        {errors.full_name}
                      </p>
                    )}
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label
                      className="
                        block mb-2
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-white
                      "
                    >
                      Company
                    </label>

                    <input
                      type="text"
                        name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Acme Ltd"
                      aria-invalid={!!errors.company}
                      aria-describedby="company-error"
                      className={`
                        w-full h-14
                        rounded-xl
                        border ${errors.company ? "border-red-400" : "border-white/20"}
                        bg-white dark:text-[#111827]
                        px-4
                        text-sm
                        outline-none
                        focus:border-white
                      `}
                    />
                    {errors.company && (
                      <p id="company-error" className="mt-2 text-xs font-medium text-red-100">
                        {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* EMAIL */}
                  <div>
                    <label
                      className="
                        block mb-2
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-white
                      "
                    >
                      Email Address
                    </label>

                    <input
                      type="text"
                      inputMode="email"
                      placeholder="jane@acme.co.uk"
                       name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!errors.email}
                        aria-describedby="email-error"
                      className={`
                        w-full h-14
                        rounded-xl
                        border ${errors.email ? "border-red-400" : "border-white/20"}
                        bg-white dark:text-[#111827]
                        px-4
                        text-sm
                        outline-none
                        focus:border-white
                      `}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-xs font-medium text-red-100">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      className="
                        block mb-2
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-white
                      "
                    >
                      Phone Number
                    </label>

                    <div
                    
                      className={`
                        flex items-center
                        overflow-hidden
                        rounded-xl
                        border ${errors.phone ? "border-red-400" : "border-white/20"}
                        bg-white dark:text-[#111827]
                      `}
                    >

                      {/* COUNTRY SELECT */}
                      <select
                        value={selectedCountry.code}
                        onChange={(e) => {
                          const country = countries.find(
                            (c) => c.code === e.target.value
                          );

                          if (country) {
                            setSelectedCountry(country);
                            setFormData((prev) => ({
                            ...prev,
                            country: country.name,
                          }));

                            // Re-check the phone number against the newly
                            // selected country's numbering plan
                            if (touched.phone) {
                              setErrors((prev) => ({
                                ...prev,
                                phone: validatePhone(formData.phone, country.code),
                              }));
                            }
                          }
                        }}
                        className="
                          h-14
                          border-r border-gray-200
                          bg-white
                          px-3
                          text-sm
                          outline-none
                          min-w-[120px]
                        "
                      >
                        {countries.map((country) => (
                          <option
                            key={country.code}
                            value={country.code}
                          >
                            {country.code} ({country.dialCode})
                          </option>
                        ))}
                      </select>

                      {/* PHONE INPUT */}
                      <input
                        type="text"
                        inputMode="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        onBlur={handleBlur}
                        aria-invalid={!!errors.phone}
                        aria-describedby="phone-error"
                        placeholder="07700 000000"
                        className="
                          flex-1
                          h-14
                          bg-transparent
                          px-4
                          text-sm
                          outline-none
                        "
                      />
                    </div>
                    {errors.phone && (
                      <p id="phone-error" className="mt-2 text-xs font-medium text-red-100">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* SERVICE SELECT */}
                <div>
                  <label
                    className="
                      block mb-2
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white
                    "
                  >
                    Services Of Interest
                  </label>

                  <select
                  name="service_interest"
                  value={formData.service_interest}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.service_interest}
                  aria-describedby="service_interest-error"
                    className={`
                      w-full h-14
                      rounded-xl
                      border ${errors.service_interest ? "border-red-400" : "border-white/20"}
                      bg-white
                      dark:text-[#111827]
                      px-4
                      text-sm
                      outline-none
                    `}
                  >
                    <option value="">Select a service</option>

                    {services2.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                  </select>
                  {errors.service_interest && (
                    <p id="service_interest-error" className="mt-2 text-xs font-medium text-red-100">
                      {errors.service_interest}
                    </p>
                  )}
                </div>

                {/* TEXTAREA */}
                <div>
                  <label
                    className="
                      block mb-2
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white
                    "
                  >
                    Additional Notes
                  </label>

                  <textarea
                    rows={4}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.notes}
                    aria-describedby="notes-error"
                    placeholder="Tell us about your connectivity requirements..."
                    className={`
                      w-full
                      rounded-xl
                      border ${errors.notes ? "border-red-400" : "border-white/20"}
                      bg-white dark:text-[#111827]
                      p-4
                      text-sm
                      outline-none
                      resize-none
                    `}
                  />
                  {errors.notes && (
                    <p id="notes-error" className="mt-2 text-xs font-medium text-red-100">
                      {errors.notes}
                    </p>
                  )}
                </div>

                {/* CHECKBOX */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.consent}
                      aria-describedby="consent-error"
                      className="
                        mt-1
                        accent-white
                      "
                    />

                    <span
                      className="
                        text-xs
                        leading-6
                        text-white/80
                      "
                    >
                      I agree to be contacted by Zoiko Telecom regarding my
                      enquiry. All data is processed in accordance with our
                      Privacy Policy.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" className="mt-2 text-xs font-medium text-red-100">
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                type="submit"
                disabled={loading}
                className="
                  w-full h-14
                  rounded-full
                  bg-white
                  text-[#C2185B]
                  font-bold
                  shadow-xl
                  hover:scale-[1.01]
                  transition-all duration-300
                  disabled:opacity-50
                "
              >
                {loading ? "Submitting..." : "Request Business Consultation"}
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
        </section>

    </>
  )
}