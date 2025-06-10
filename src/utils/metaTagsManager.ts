
export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
  httpEquiv?: string;
}

export interface LinkTag {
  rel: string;
  href: string;
  type?: string;
  crossOrigin?: string;
}

export class MetaTagsManager {
  private static instance: MetaTagsManager;
  
  static getInstance(): MetaTagsManager {
    if (!MetaTagsManager.instance) {
      MetaTagsManager.instance = new MetaTagsManager();
    }
    return MetaTagsManager.instance;
  }

  updateTitle(title: string): void {
    document.title = title;
  }

  updateMetaTags(tags: MetaTag[]): void {
    tags.forEach(tag => {
      const selector = tag.name ? `meta[name="${tag.name}"]` : 
                      tag.property ? `meta[property="${tag.property}"]` :
                      tag.httpEquiv ? `meta[http-equiv="${tag.httpEquiv}"]` : null;
      
      if (!selector) return;

      let existingTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (existingTag) {
        existingTag.content = tag.content;
      } else {
        const newTag = document.createElement('meta');
        if (tag.name) newTag.name = tag.name;
        if (tag.property) newTag.setAttribute('property', tag.property);
        if (tag.httpEquiv) newTag.httpEquiv = tag.httpEquiv;
        newTag.content = tag.content;
        document.head.appendChild(newTag);
      }
    });
  }

  updateLinkTags(links: LinkTag[]): void {
    links.forEach(link => {
      const selector = `link[rel="${link.rel}"]`;
      let existingLink = document.querySelector(selector) as HTMLLinkElement;
      
      if (existingLink) {
        existingLink.href = link.href;
        if (link.type) existingLink.type = link.type;
        if (link.crossOrigin) existingLink.crossOrigin = link.crossOrigin;
      } else {
        const newLink = document.createElement('link');
        newLink.rel = link.rel;
        newLink.href = link.href;
        if (link.type) newLink.type = link.type;
        if (link.crossOrigin) newLink.crossOrigin = link.crossOrigin;
        document.head.appendChild(newLink);
      }
    });
  }

  addStructuredData(data: object): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
}

// Export for easier Next.js migration
export const metaTagsManager = MetaTagsManager.getInstance();
