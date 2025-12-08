"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";

export default function Footer() {
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm ">
            © {new Date().getFullYear()} All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {/* Email */}
            
            {/* Privacy Policy Dialog */}
            <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
              <DialogTrigger asChild>
                <Button variant="link" className="text-sm p-0 h-auto">
                  Datenschutzerklärung
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Datenschutzerklärung</DialogTitle>
                </DialogHeader>
                <PrivacyPolicyContent />
              </DialogContent>
            </Dialog>

            {/* Impressum Dialog */}
            <Dialog open={impressumOpen} onOpenChange={setImpressumOpen}>
              <DialogTrigger asChild>
                <Button variant="link" className="text-sm p-0 h-auto">
                  Impressum
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Impressum</DialogTitle>
                </DialogHeader>
                <ImpressumContent />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none py-4">
      <p className="text-sm mb-4">
        Diese Datenschutzerklärung informiert Sie über die Verarbeitung
        personenbezogener Daten auf dieser Website gemäß der
        Datenschutz-Grundverordnung (DSGVO).
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">1. Verantwortliche Stelle</h3>
      <p className="mb-2">Evaly Contreras</p>
      <p className="mb-2">Görlitzer Str. 59</p>
      <p className="mb-4">10997 Berlin</p>
      <p className="mb-4">
        E-Mail:{" "}
        <a href="mailto:evalyc@gmail.com" className="underline">
          evalyc@gmail.com
        </a>
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">2. Hosting (Vercel)</h3>
      <p className="mb-2">
        Unsere Website wird bei <strong>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</strong>, gehostet.
      </p>
      <p className="mb-2">
        Beim Aufruf dieser Website erfasst Vercel automatisch sogenannte <strong>Server-Logfiles</strong>, die folgende Daten enthalten können:
      </p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Browsertyp und -version</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Aufgerufene Seiten</li>
      </ul>
      <p className="mb-2">
        Diese Daten sind technisch notwendig, um die Website bereitzustellen und die Sicherheit zu gewährleisten.
      </p>
      <p className="mb-2">
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse: technische Funktionsfähigkeit und Sicherheit des Servers).
      </p>
      <p className="mb-4">
        Weitere Informationen:{" "}
        <a 
          href="https://vercel.com/legal/privacy-policy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline"
        >
          https://vercel.com/legal/privacy-policy
        </a>
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">3. Kontaktformular</h3>
      <p className="mb-2">
        Wenn Sie über das Kontaktformular mit uns Kontakt aufnehmen, werden die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Nachricht) gespeichert und verarbeitet, um Ihre Anfrage zu bearbeiten.
      </p>
      <p className="mb-2">
        <strong>Rechtsgrundlage:</strong><br />
        Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation) oder<br />
        Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Kommunikation).
      </p>
      <p className="mb-4">
        Die Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer Anfrage nicht mehr erforderlich sind.
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">4. E-Mail-Kontakt</h3>
      <p className="mb-4">
        Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage gespeichert.
        Rechtsgrundlage: Art. 6 Abs. 1 lit. b/f DSGVO.
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">5. Keine Cookies / Kein Tracking</h3>
      <p className="mb-4">
        Auf dieser Website werden keine Cookies zu Analyse- oder Marketingzwecken gesetzt.
        Es wird kein Tracking- oder Analysetool verwendet.
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">6. Externe Links (Instagram)</h3>
      <p className="mb-4">
        Diese Website enthält einen Link zu meinem Instagram-Profil.
        Beim bloßen Klicken auf den Link werden keine Daten automatisch an Instagram übertragen.
        Erst wenn Sie den externen Link aktiv anklicken, gelten die Datenschutzrichtlinien von Instagram (Meta Platforms).
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">7. Urheberrecht</h3>
      <p className="mb-4">
        Alle Inhalte auf dieser Website (Texte, Bilder, Fotografien, Bücher, Designs) stammen von der Betreiberin der Seite und sind urheberrechtlich geschützt.
        Jegliche Verwendung außerhalb gesetzlicher Ausnahmen bedarf der vorherigen Zustimmung.
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">8. Rechte der betroffenen Personen</h3>
      <p className="mb-2">
        Sie haben gemäß DSGVO folgende Rechte:
      </p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
      </ul>
      <p className="mb-4">
        Anfragen richten Sie bitte an die oben genannte E-Mail-Adresse.
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">9. Beschwerderecht</h3>
      <p className="mb-4">
        Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen Datenschutzrecht verstößt, können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren.
        Zuständig ist insbesondere der Berliner Landesdatenschutzbeauftragte (für Berlin).
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">10. Änderung dieser Datenschutzerklärung</h3>
      <p className="mb-4">
        Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
      </p>

      <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500">
        Last updated: {new Date().toLocaleDateString('de-DE')}
      </div>
    </div>
  );
}

function ImpressumContent() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none py-4">
      <p className="mb-4">
        Angaben gemäß § 5 TMG
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">Name</h3>
      <p className="mb-4">Evaly Contreras</p>

      <h3 className="font-semibold text-lg mt-6 mb-2">Anschrift</h3>
      <p className="mb-2">Görlitzer Str. 59</p>
      <p className="mb-4">10997 Berlin</p>

      <h3 className="font-semibold text-lg mt-6 mb-2">Kontakt</h3>
      <p className="mb-2">
        E-Mail:{" "}
        <a href="mailto:evalyc@gmail.com" className="underline">
          evalyc@gmail.com
        </a>
      </p>
      <p className="mb-4">Telefon: +49 162 585 8803</p>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
      </h3>
      <p className="mb-4">Evaly Contreras</p>

      <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500">
        Last updated: {new Date().toLocaleDateString('de-DE')}
      </div>
    </div>
  );
}