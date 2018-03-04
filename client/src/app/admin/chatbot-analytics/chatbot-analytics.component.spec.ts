import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotAnalyticsComponent } from './chatbot-analytics.component';

describe('ChatbotAnalyticsComponent', () => {
  let component: ChatbotAnalyticsComponent;
  let fixture: ComponentFixture<ChatbotAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
